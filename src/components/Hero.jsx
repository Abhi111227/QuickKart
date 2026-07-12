function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-100 to-green-50">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Fresh Groceries
            <br />
            Delivered to
            <span className="text-green-600"> Your Door</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Shop fresh fruits, vegetables, dairy products and daily essentials
            at the best prices.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition">
              Shop Now
            </button>

            <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg transition">
              Explore
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800"
            alt="Fresh Grocery"
            className="rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;