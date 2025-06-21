// app/api/products/route.js

import { products } from '@/lib/productsData';
export async function GET() {
  return Response.json(products);
}

export async function POST(req) {
  const body = await req.json();
  const { name, price, imageUrl,category } = body;

  if (!name || !price || !imageUrl || !category) {
    return new Response(JSON.stringify({ message: 'Missing fields' }), {
      status: 400,
    });
  }

  const newProduct = {
    id: Date.now().toString(),
    name,
    price,
    imageUrl,
    category,
  };

  products.push(newProduct);
  return Response.json(newProduct, { status: 201 });
}
