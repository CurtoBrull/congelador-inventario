// src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import type { ProductoConId } from '@/types/ProductoConId';
import ProductoForm from '@/components/ProductoForm';
import ProductoList from '@/components/ProductoList';
import CSVUploader from '@/components/CSVUploader';

export default function HomePage() {
	const [productos, setProductos] = useState<ProductoConId[]>([]);
	const [productoEditando, setProductoEditando] = useState<ProductoConId | null>(null);

	const fetchProductos = async () => {
		try {
			const res = await fetch('/api/productos');
			const data = await res.json();
			console.log('Productos recibidos del backend:', data);
			setProductos(data);
		} catch (err) {
			console.error('Error al cargar productos:', err);
		}
	};

	const eliminarProducto = async (id: string) => {
		const res = await fetch(`/api/productos?id=${id}`, {
			method: 'DELETE',
		});

		if (res.ok) {
			fetchProductos();
		} else {
			alert('Error al eliminar producto');
		}
	};

	const guardarProducto = () => {
		setProductoEditando(null);
		fetchProductos();
	};

	useEffect(() => {
		fetchProductos();
	}, []);

	const exportarJSON = () => {
		fetch('/api/exportar-json')
			.then(res => res.blob())
			.then(blob => {
				const url = URL.createObjectURL(blob);
				const link = document.createElement('a');
				link.href = url;
				link.download = 'productos.json';
				link.click();
				URL.revokeObjectURL(url);
			})
			.catch(() => alert('Error al exportar productos'));
	};

	return (
		<main className='p-4 max-w-xl mx-auto'>
			<h1 className='text-2xl font-bold mb-4'>Inventario del Congelador</h1>

			<CSVUploader onUploaded={fetchProductos} />

			<ProductoForm producto={productoEditando} onSaved={guardarProducto} onCancel={() => setProductoEditando(null)} />

			<ProductoList productos={productos} onDelete={eliminarProducto} onEdit={setProductoEditando} />
			<button onClick={exportarJSON} className='bg-blue-600 text-white px-4 py-1 m-1 rounded mb-4'>
				Exportar JSON
			</button>
		</main>
	);
}
