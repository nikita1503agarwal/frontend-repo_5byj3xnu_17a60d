import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 text-white font-bold grid place-items-center">U</div>
              <span className="sr-only">Home</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
              <a href="#women" className="hover:text-black">Women</a>
              <a href="#men" className="hover:text-black">Men</a>
              <a href="#kids" className="hover:text-black">Kids</a>
              <a href="#baby" className="hover:text-black">Baby</a>
              <a href="#collections" className="hover:text-black">Collections</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="search"
              placeholder="Search"
              className="hidden sm:block w-56 rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="relative px-3 py-1.5 text-sm border rounded-md hover:bg-gray-50">Wishlist</button>
            <button className="relative px-3 py-1.5 text-sm border rounded-md hover:bg-gray-50">Cart
              <span className="absolute -top-2 -right-2 text-[10px] bg-red-600 text-white rounded-full px-1.5 py-0.5">0</span>
            </button>
            <button
              className="md:hidden p-2 border rounded-md"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span className="block w-5 h-0.5 bg-gray-800 mb-1" />
              <span className="block w-5 h-0.5 bg-gray-800 mb-1" />
              <span className="block w-5 h-0.5 bg-gray-800" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-3">
            <nav className="grid gap-2 text-sm text-gray-700">
              <a href="#women" className="py-2 border-b">Women</a>
              <a href="#men" className="py-2 border-b">Men</a>
              <a href="#kids" className="py-2 border-b">Kids</a>
              <a href="#baby" className="py-2 border-b">Baby</a>
              <a href="#collections" className="py-2">Collections</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
