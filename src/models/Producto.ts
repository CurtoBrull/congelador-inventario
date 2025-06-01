// src/models/Producto.ts
import { Schema, model, models } from 'mongoose';

export interface IProducto {
  nombre: string;
  tipo: string;
  pesoKg: number;
  fechaCaducidad: string;
}

const productoSchema = new Schema<IProducto>(
  {
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    pesoKg: { type: Number, required: true },
    fechaCaducidad: { type: String, required: true },
  },
  { timestamps: true }
);

export const Producto = models.Producto ?? model<IProducto>('Producto', productoSchema);
