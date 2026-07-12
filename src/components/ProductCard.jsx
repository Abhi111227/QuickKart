function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

      {/* Discount Badge */}
      <div className="relative">

        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
          20% OFF
        </span>

        <button className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 shadow flex items-center justify-center hover:bg-red-100">
          ❤️
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover"
        />

      </div>

      <div className="p-4">

        <p className="text-yellow-500 font-medium">
          ⭐ 4.8 (120)
        </p>

        <h2 className="text-lg font-bold mt-2">
          {product.name}
        </h2>

        <p className="text-gray-500 text-sm">
          Fresh & Organic
        </p>

        <div className="flex items-center gap-2 mt-3">

          <span className="text-xl font-bold text-green-600">
            ₹{product.price}
          </span>

          <span className="line-through text-gray-400">
            ₹{product.price + 40}
          </span>

        </div>

        <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-semibold transition">
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;