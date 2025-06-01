// src/models/Producto.ts
import { Schema, model, models } from 'mongoose';

export interface IProducto {
  nombre?: string;
  tipo?: string;
  pesoKg?: number;
  cantidad?: number;
  fechaCaducidad?: string;
}

const productoSchema = new Schema<IProducto>(
  {
    nombre: { type: String },
    tipo: { type: String },
    pesoKg: { type: Number },
    cantidad: { type: Number, default: 1 }, // Cantidad por defecto es 1
    fechaCaducidad: { type: String },
  },
  { timestamps: true }
);

if (models.Producto) {
  delete models.Producto;
}

export const Producto = models.Producto ?? model<IProducto>('Producto', productoSchema);
