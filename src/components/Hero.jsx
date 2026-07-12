function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-100 to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Fresh Groceries <br />
            Delivered to{" "}
            <span className="text-green-600">
              Your Door
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Shop fresh fruits, vegetables, dairy products and daily essentials
            at the best prices.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Shop Now
            </button>

            <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition">
              Explore
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200"
            alt="Groceries"
            className="w-full h-[380px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;