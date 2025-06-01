// src/app/api/importar-csv/route.ts
import { NextResponse } from 'next/server';
import connect from '@/lib/mongodb';
import { Producto } from '@/models/Producto';
import { Readable } from 'stream';
import { parse } from 'csv-parse';
import { z } from 'zod';

const productoSchema = z.object({
  Nombre: z.string(),
  Tipo: z.string().optional(),
  'Peso (kg)': z.string().optional(),
  Caducidad: z.string().optional(),
});

interface CSVRow {
  Nombre: string;
  Tipo?: string;
  'Peso (kg)'?: string;
  Caducidad?: string;
}

export const POST = async (req: Request) => {
  try {
    const formData = await req.formData();
    const file = formData.get('csv') as File;
    const buffer = Buffer.from(await file.arrayBuffer());

    await connect();

    const productos: {
      nombre: string;
      tipo: string;
      pesoKg: number;
      fechaCaducidad: string;
    }[] = [];

    const stream = Readable.from(buffer.toString());
    const parser = stream.pipe(parse({ columns: true, trim: true }));

    for await (const row of parser as AsyncIterable<CSVRow>) {
      const parsed = productoSchema.safeParse(row);
      if (!parsed.success) continue;

      const { Nombre, Tipo, ['Peso (kg)']: peso, Caducidad } = parsed.data;

      const pesoKg = parseFloat(peso ?? '');
      productos.push({
        nombre: Nombre,
        tipo: Tipo ?? '',
        pesoKg: isNaN(pesoKg) ? 0 : pesoKg,
        fechaCaducidad: Caducidad ?? '',
      });
    }

    if (productos.length > 0) {
      await Producto.insertMany(productos);
    }

    return NextResponse.json({ mensaje: 'CSV importado correctamente' });
  } catch (err) {
    console.error('Error al procesar CSV', err);
    return NextResponse.json({ error: 'Error al procesar CSV' }, { status: 500 });
  }
};
