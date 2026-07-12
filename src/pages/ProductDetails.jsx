import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Product Not Found 😢</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <Link
        to="/"
        className="text-green-600 hover:text-green-700 font-semibold"
      >
        ← Back to Home
      </Link>

      <div className="grid md:grid-cols-2 gap-12 mt-8">

        {/* Left Side */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side */}
        <div>

          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            {product.discount}% OFF
          </span>

          <h1 className="text-4xl font-bold mt-4">
            {product.name}
          </h1>

          <p className="text-yellow-500 mt-2">
            ⭐ {product.rating} ({product.reviews} Reviews)
          </p>

          <h2 className="text-3xl text-green-600 font-bold mt-4">
            ₹{product.price}
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            {product.description}
          </p>

          <div className="mt-6">
            <span className="font-semibold">
              Category:
            </span>{" "}
            {product.category}
          </div>

          <div className="mt-2">
            <span className="font-semibold">
              Stock:
            </span>{" "}
            <span className="text-green-600">
              {product.stock} Available
            </span>
          </div>

          <button
            className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl transition duration-300"
          >
            🛒 Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;