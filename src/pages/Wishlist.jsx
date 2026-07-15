import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useContext(WishlistContext);

  const { addToCart } = useContext(CartContext);

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="text-7xl mb-6">❤️</div>

        <h1 className="text-4xl font-bold mb-4">
          Your Wishlist is Empty
        </h1>

        <p className="text-gray-500 mb-8">
          Save your favourite products here.
        </p>

        <Link
          to="/"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-10">
        My Wishlist ❤️
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">
                {item.name}
              </h2>

              <p className="text-green-600 text-2xl font-bold mt-3">
                ₹{item.price}
              </p>

              <div className="flex gap-3 mt-6">

                <button
                  onClick={() => {
                    addToCart(item);
                    removeFromWishlist(item.id);
                  }}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg transition"
                >
                  🛒 Move to Cart
                </button>

                <button
                  onClick={() =>
                    removeFromWishlist(item.id)
                  }
                  className="px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                >
                  ✕
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;