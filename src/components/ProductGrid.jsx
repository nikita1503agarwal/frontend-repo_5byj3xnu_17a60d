import { useEffect, useState } from 'react'

function ProductCard({ p }) {
  return (
    <div className="group border rounded-lg overflow-hidden bg-white">
      <div className="aspect-[3/4] bg-gray-100 relative">
        <img
          src={p.images?.[0] || 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=60&auto=format&fit=crop'}
          alt={p.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3">
        <h4 className="text-sm font-semibold line-clamp-1">{p.name}</h4>
        <p className="text-xs text-gray-500 line-clamp-1">{p.features?.[0] || p.category}</p>
        <p className="mt-1 font-semibold">₹{p.price}</p>
        <button className="mt-2 w-full border rounded-md py-1.5 text-sm hover:bg-gray-50">Quick add</button>
      </div>
    </div>
  )
}

function ProductGrid() {
  const [products, setProducts] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/products/search`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ limit: 8 })
    })
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setProducts([]))
  }, [])

  return (
    <section id="new" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold">New Arrivals</h2>
        <a href="#" className="text-red-600 text-sm font-semibold">Shop all</a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(p => (
          <ProductCard key={p.slug} p={p} />)
        )}
      </div>
    </section>
  )
}

export default ProductGrid
