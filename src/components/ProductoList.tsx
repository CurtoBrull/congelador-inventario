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
		<div className='w-full overflow-x-auto'>
			<table className='w-full min-w-[300px] table-fixed border-collapse border border-gray-300 text-sm'>
				<thead className='bg-gray-200 dark:bg-gray-800 text-black dark:text-white'>
					<tr>
						<th className='border px-2 py-1 text-left w-auto'>Nombre</th>
						<th className='border px-2 py-1 text-left w-[60px]'>Cant</th>
						<th className='border px-2 py-1 text-left hidden sm:table-cell'>Peso (kg)</th>
						<th className='border px-2 py-1 text-left hidden sm:table-cell'>Tipo</th>
						<th className='border px-2 py-1 text-left hidden sm:table-cell'>Caducidad</th>
						<th className='border px-2 py-1 text-left'>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{productos.map(prod => (
						<tr key={prod._id}>
							<td
								className='border px-2 py-1 cursor-pointer text-blue-700 hover:underline'
								onClick={() => alert(prod.nombre)}>
								{prod.nombre}
							</td>
							<td className='border px-2 py-1 text-center'>{prod.cantidad}</td>
							<td className='border px-2 py-1 hidden sm:table-cell'>{prod.pesoKg}</td>
							<td className='border px-2 py-1 hidden sm:table-cell'>{prod.tipo}</td>
							<td className='border px-2 py-1 hidden sm:table-cell'>
								{prod.fechaCaducidad ? new Date(prod.fechaCaducidad).toLocaleDateString() : ''}
							</td>
							<td className='border px-2 py-1 whitespace-nowrap'>
								<button onClick={() => onEdit(prod)} className='text-blue-600 hover:underline mr-2'>
									Editar
								</button>
								<button onClick={() => onDelete(prod._id)} className='text-red-600 hover:underline'>
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
