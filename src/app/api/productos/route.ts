// src/app/api/productos/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connect from '@/lib/mongodb';
import { Producto } from '@/models/Producto';

export async function GET() {
  await connect();

  try {
    const productos = await Producto.find().sort({ nombre: 1 });
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

    // Comprobación de duplicado
    const existe = await Producto.findOne({
      nombre: data.nombre
    });

    if (existe) {
      return NextResponse.json({ error: 'Ya existe un producto con ese nombre, use la opción EDITAR.' }, { status: 409 });
    }

    const nuevoProducto = await Producto.create(data);
    return NextResponse.json(nuevoProducto, { status: 201 });
  } catch (error) {
    console.error('Error al crear producto:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}


export async function PUT(request: Request) {
  await connect();

  try {
    const { _id, ...updateData } = await request.json();
    const actualizado = await Producto.findByIdAndUpdate(_id, updateData, { new: true });
    return NextResponse.json(actualizado);
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    return NextResponse.json({ error: 'Error al actualizar producto' }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  await connect();

  try {
    const id = request.nextUrl.searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Falta el ID' }, { status: 400 });

    await Producto.findByIdAndDelete(id);
    return NextResponse.json({ mensaje: 'Producto eliminado' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    return NextResponse.json({ error: 'Error al eliminar producto' }, { status: 400 });
  }
}
