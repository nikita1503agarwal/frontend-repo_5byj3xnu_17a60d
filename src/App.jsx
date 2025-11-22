import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import ProductGrid from './components/ProductGrid'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <ProductGrid />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold">Breathable</h3>
              <p className="text-sm text-gray-600 mt-1">Moisture-wicking fabrics keep you cool and dry.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold">Lightweight Warmth</h3>
              <p className="text-sm text-gray-600 mt-1">Effortless insulation without the bulk.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold">Everyday Comfort</h3>
              <p className="text-sm text-gray-600 mt-1">Soft-touch materials designed for daily wear.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Minimal Apparel. All rights reserved.
      </footer>
    </div>
  )
}

export default App
