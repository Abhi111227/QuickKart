function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="text-7xl text-center">
        {product.image}
      </div>

      <h2 className="text-xl font-bold mt-4">
        {product.name}
      </h2>

      <p className="text-gray-500">
        {product.category}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-green-600 font-bold text-xl">
          ₹{product.price}
        </span>

        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Add
        </button>
      </div>

    </div>
  );
}

export default ProductCard;