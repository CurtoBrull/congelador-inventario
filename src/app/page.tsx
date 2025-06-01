'use client';

import { useState, useEffect } from 'react';
import type { ProductoConId } from '@/types/ProductoConId';
import ProductoForm from '@/components/ProductoForm';

export default function HomePage() {
  const [productos, setProductos] = useState<ProductoConId[]>([]);

  const fetchProductos = () => {
    fetch('/api/productos')
      .then(res => res.json())
      .then(setProductos);
  };

  const eliminarProducto = async (id: string) => {
    const res = await fetch('/api/productos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    if (res.ok) fetchProductos();
    else alert('Error al eliminar producto');
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Inventario Congelador</h1>

      <ProductoForm onCreated={fetchProductos} />

      <ul className="space-y-1">
        {productos.map((prod) => (
          <li key={prod._id} className="flex items-center gap-2">
            <span>{prod.nombre} -- {prod.pesoKg} kg -- {prod.tipo} -- {prod.fechaCaducidad}</span>
            <button
              onClick={() => eliminarProducto(prod._id)}
              className="text-red-600 hover:underline"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
