// app/api/products/[id]/route.js

import { NextResponse } from 'next/server';
import { products } from '@/lib/productsData';

// GET /api/products/:id
export async function GET(_, { params }) {
  const { id } = params;

  const product = products.find((p) => p.id === id);
  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}

// DELETE /api/products/:id
export async function DELETE(_, { params }) {
  const { id } = params;

  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  const deleted = products.splice(index, 1)[0];
  return NextResponse.json({ message: 'Deleted', product: deleted });
}
