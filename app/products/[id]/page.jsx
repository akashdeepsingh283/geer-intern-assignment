'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) {
    return (
      <main className="p-6">
        <p className="text-center text-gray-600">Loading or Product not found...</p>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <button
        onClick={() => router.back()}
        className="text-blue-600 hover:underline mb-4 block"
      >
        ← Back to Products
      </button>

      <div className="bg-white border rounded-xl overflow-hidden shadow-md">
        <div className="relative w-full h-80">
          <Image
            src={product.imageUrl || 'https://via.placeholder.com/400x300?text=No+Image'}
            alt={product.name}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-2">Price: ₹{product.price}</p>
          {product.category && (
            <p className="text-gray-500 mb-4">Category: {product.category}</p>
          )}
          <p className="text-gray-600">This is a detailed description placeholder. You can replace it with actual product info.</p>
        </div>
      </div>
    </main>
  );
}
