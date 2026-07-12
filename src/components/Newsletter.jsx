function Newsletter() {
  return (
    <section className="bg-green-600 py-16">
      <div className="max-w-4xl mx-auto px-5 text-center">

        <h2 className="text-4xl font-bold text-white">
          Subscribe to our Newsletter
        </h2>

        <p className="text-green-100 mt-4">
          Get the latest offers, discounts and fresh arrivals directly in your inbox.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8">

          <input
            type="email"
            placeholder="Enter your email..."
            className="flex-1 px-5 py-4 rounded-lg outline-none"
          />

          <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;