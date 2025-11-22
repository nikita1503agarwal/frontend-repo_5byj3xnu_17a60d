import { useEffect, useState } from 'react'

function Collections() {
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/collections`)
      .then(res => res.json())
      .then(setItems)
      .catch(() => setItems([]))
  }, [])

  return (
    <section id="collections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured Collections</h2>
        <a href="#" className="text-red-600 text-sm font-semibold">View all</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((c) => (
          <a key={c.slug} href={`#/collections/${c.slug}`} className="group block rounded-lg overflow-hidden border">
            <div className="aspect-[16/9] bg-gray-100 relative">
              {c.banner && (
                <img src={c.banner} alt={c.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{c.description || 'Explore the range of breathable, functional pieces.'}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Collections
