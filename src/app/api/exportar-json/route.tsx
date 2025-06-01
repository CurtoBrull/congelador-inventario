// src/app/api/exportar-json/route.ts
import { NextResponse } from 'next/server';
import connect from '@/lib/mongodb';
import { Producto } from '@/models/Producto';

export const GET = async () => {
  try {
    await connect();
    const productos = await Producto.find().lean();

    return new NextResponse(JSON.stringify(productos), {
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': 'attachment; filename=productos.json',
      },
    });
  } catch (err) {
    console.error('Error al exportar productos:', err);
    return NextResponse.json({ error: 'Error al exportar productos' }, { status: 500 });
  }
};
