// src/components/ProductoList.tsx
'use client';

import { ProductoConId } from '@/types/ProductoConId';

interface Props {
  readonly productos: readonly ProductoConId[];
  readonly onDelete: (id: string) => void;
  readonly onEdit: (producto: ProductoConId) => void;
}

export default function ProductList({ productos, onDelete, onEdit }: Readonly<Props>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-2 py-1 text-left">Nombre</th>
            <th className="border px-2 py-1 text-left">Peso (kg)</th>
            <th className="border px-2 py-1 text-left">Cantidad</th>
            <th className="border px-2 py-1 text-left">Tipo</th>
            <th className="border px-2 py-1 text-left">Caducidad</th>
            <th className="border px-2 py-1 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod) => (
            <tr key={prod._id}>
              <td className="border px-2 py-1">{prod.nombre}</td>
              <td className="border px-2 py-1">{prod.pesoKg}</td>
              <td className="border px-2 py-1">{prod.cantidad}</td>
              <td className="border px-2 py-1">{prod.tipo}</td>
              <td className="border px-2 py-1">
                {prod.fechaCaducidad ? new Date(prod.fechaCaducidad).toLocaleDateString() : ''}
              </td>
              <td className="border px-2 py-1">
                <button
                  onClick={() => onEdit(prod)}
                  className="text-blue-600 hover:underline mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete(prod._id)}
                  className="text-red-600 hover:underline"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
