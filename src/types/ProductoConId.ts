// src/types/ProductoConId.ts
import type { IProducto } from '@/models/Producto';

export interface ProductoConId extends IProducto {
  _id: string;
}
