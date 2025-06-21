'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      })
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  useEffect(() => {
    const lower = search.toLowerCase();
    const results = products.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        (p.category && p.category.toLowerCase().includes(lower))
    );
    setFiltered(results);
  }, [search, products]);

  return (
    <main className="p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">All Products</h1>

      {/* Search Box */}
      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by name or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Product Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
  {filtered.map((product) => (
    <Link
      href={`/products/${product.id}`}
      key={product.id}
      className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition duration-300 flex flex-col no-underline"
    >
      <div className="relative w-full aspect-square">
        <Image
          src={product.imageUrl || 'https://via.placeholder.com/400x400?text=No+Image'}
          alt={product.name}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h2 className="text-sm font-medium text-gray-800 truncate">{product.name}</h2>
        <p className="text-lg font-semibold text-gray-900">₹{product.price}</p>
      </div>
    </Link>
  ))}
</div>

    </main>
  );
}
