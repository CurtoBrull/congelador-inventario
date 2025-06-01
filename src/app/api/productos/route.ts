// src/app/api/productos/route.ts
import { NextResponse } from 'next/server';
import connect from '@/lib/mongodb'; // <-- default import
import { Producto } from '@/models/Producto';

export async function GET() {
  await connect();

  try {
    const productos = await Producto.find().sort({ fechaCaducidad: 1 });
    return NextResponse.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await connect();

  try {
    const data = await request.json();
    const nuevoProducto = await Producto.create(data);
    return NextResponse.json(nuevoProducto, { status: 201 });
  } catch (error) {
    console.error('Error al crear producto:', error);
    return NextResponse.json({ error: 'Error al crear producto' }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  await connect();

  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'ID no proporcionado' }, { status: 400 });
    }

    await Producto.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Producto eliminado' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    return NextResponse.json({ error: 'Error al eliminar producto' }, { status: 500 });
  }
}

