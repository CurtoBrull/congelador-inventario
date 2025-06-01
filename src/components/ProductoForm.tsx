// src/components/ProductoForm.tsx
'use client';

import { useEffect, useState } from 'react';
import type { ProductoConId } from '@/types/ProductoConId';

interface Props {
	readonly producto?: ProductoConId | null;
	readonly onSaved: () => void;
	readonly onCancel: () => void;
}

export default function ProductoForm({ producto, onSaved, onCancel }: Props) {
	const [form, setForm] = useState({
		nombre: '',
		tipo: '',
		pesoKg: '',
		cantidad: '',
		fechaCaducidad: '',
	});

	useEffect(() => {
		if (producto) {
			setForm({
				nombre: producto.nombre ?? '',
				tipo: producto.tipo ?? '',
				pesoKg: producto.pesoKg !== undefined ? producto.pesoKg.toString() : '',
				cantidad: producto.cantidad !== undefined ? producto.cantidad.toString() : '',
				fechaCaducidad: producto.fechaCaducidad ? producto.fechaCaducidad.slice(0, 10) : '',
			});
		} else {
			setForm({ nombre: '', tipo: '', pesoKg: '', cantidad: '', fechaCaducidad: '' });
		}
	}, [producto]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const method = producto ? 'PUT' : 'POST';

		const cantidad = parseInt(form.cantidad);

		if (isNaN(cantidad)) {
    alert('La cantidad no es válida.');
    return;
  }

		const res = await fetch('/api/productos', {
			method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				...form,
				pesoKg: parseFloat(form.pesoKg),
        cantidad: parseInt(form.cantidad),
				_id: producto?._id,
			}),
		});

		if (res.ok) {
			onSaved();
		} else {
			const error = await res.json();
			alert(`Error al guardar producto: ${error.error}`);
		}
	};

	return (
		<form onSubmit={handleSubmit} className='mb-6 space-y-2'>
			<label htmlFor="nombre" className="block font-medium">Nombre</label>
			<input
				type='text'
				name='nombre'
				value={form.nombre}
				onChange={handleChange}
				placeholder='Nombre'
				required
				className='border p-1 w-full'
			/>
			<label htmlFor="pesoKg" className="block font-medium">Peso (kg)</label>
			<input
				type='number'
				name='pesoKg'
				value={form.pesoKg}
				onChange={handleChange}
				placeholder='Peso (kg)'
				step='0.01'
				className='border p-1 w-full'
			/>
			<label htmlFor="cantidad" className="block font-medium">Cantidad</label>
			<input
				type='number'
				name='cantidad'
				value={form.cantidad}
				onChange={handleChange}
				placeholder='Cantidad'
				min='1'
				required
				className='border p-1 w-full'
			/>
			<label htmlFor="tipo" className="block font-medium">Tipo</label>
			<input
				type='text'
				name='tipo'
				value={form.tipo}
				onChange={handleChange}
				placeholder='Tipo'
				className='border p-1 w-full'
			/>
			<label htmlFor="fechaCaducidad" className="block font-medium">Fecha de caducidad</label>
			<input
				type='date'
				name='fechaCaducidad'
				value={form.fechaCaducidad}
				onChange={handleChange}
				className='border p-1 w-full'
			/>

			<div className='flex gap-2'>
				<button type='submit' className='bg-blue-500 text-white px-4 py-1 rounded'>
					{producto ? 'Guardar cambios' : 'Añadir producto'}
				</button>

				{producto && (
					<button type='button' onClick={onCancel} className='text-gray-500 underline'>
						Cancelar
					</button>
				)}
			</div>
		</form>
	);
}
