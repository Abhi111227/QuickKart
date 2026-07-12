function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h3 className="text-lg font-semibold mt-4">
        {product.name}
      </h3>

      <p className="text-green-600 font-bold mt-2">
        ₹{product.price}
      </p>

      <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;