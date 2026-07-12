import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-500 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">

        {/* Left */}
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Fresh Groceries
            <br />
            Delivered in
            <span className="text-yellow-300"> 10 Minutes</span>
          </h1>

          <p className="mt-6 text-lg text-green-100">
            Order fruits, vegetables, snacks, beverages and daily essentials
            at the best prices.
          </p>

          <button className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 hover:scale-105 transition-all duration-300">
            Shop Now →
          </button>
        </div>

        {/* Right */}
        <div className="mt-12 md:mt-0 flex justify-center">
          <img
            src={heroImage}
            alt="Fresh Grocery"
            className="w-[350px] md:w-[450px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;