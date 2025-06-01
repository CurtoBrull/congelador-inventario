// src/components/CSVUploader.tsx
'use client';

import { useState } from 'react';

export default function CSVUploader({ onUploaded }: { readonly onUploaded: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [subiendo, setSubiendo] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    setFile(selected);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setSubiendo(true);

    const formData = new FormData();
    formData.append('csv', file);

    const res = await fetch('/api/importar-csv', {
      method: 'POST',
      body: formData,
    });

    setSubiendo(false);

    if (res.ok) {
      alert('CSV importado correctamente');
      onUploaded();
      setFile(null);
    } else {
      alert('Error al importar CSV');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-6">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="block"
      />
      <button
        type="submit"
        disabled={subiendo || !file}
        className="bg-green-600 text-white px-4 py-1 rounded disabled:opacity-50"
      >
        {subiendo ? 'Subiendo...' : 'Importar CSV'}
      </button>
    </form>
  );
}
