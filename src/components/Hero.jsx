function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="aspect-[16/7] w-full bg-gray-100 grid place-items-center text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516826957135-700dedea698c?w=2000&q=60&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 drop-shadow">Everyday Essentials</h1>
          <p className="mt-3 text-gray-800 text-sm sm:text-base">Comfort-first clothing engineered for real life. Breathable, versatile, made to move.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#new" className="px-5 py-2.5 bg-red-600 text-white rounded-md text-sm font-semibold">Shop New</a>
            <a href="#collections" className="px-5 py-2.5 bg-white/90 backdrop-blur border border-gray-300 rounded-md text-sm font-semibold">Explore Collections</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
