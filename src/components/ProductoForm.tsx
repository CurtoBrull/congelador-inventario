'use client';

import { useState } from 'react';

export default function ProductoForm({ onCreated }: { readonly onCreated?: () => void }) {
  const [form, setForm] = useState({
    nombre: '',
    tipo: '',
    pesoKg: '',
    fechaCaducidad: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, pesoKg: parseFloat(form.pesoKg) }),
    });

    if (response.ok) {
      setForm({ nombre: '', tipo: '', pesoKg: '', fechaCaducidad: '' });
      onCreated?.();
    } else {
      alert('Error al guardar producto');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-2">
      <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required className="border p-1 w-full" />
      <input type="text" name="tipo" value={form.tipo} onChange={handleChange} placeholder="Tipo" required className="border p-1 w-full" />
      <input type="number" name="pesoKg" value={form.pesoKg} onChange={handleChange} placeholder="Peso (kg)" step="0.01" required className="border p-1 w-full" />
      <input type="text" name="fechaCaducidad" value={form.fechaCaducidad} onChange={handleChange} placeholder="Fecha caducidad" className="border p-1 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">Añadir producto</button>
    </form>
  );
}
