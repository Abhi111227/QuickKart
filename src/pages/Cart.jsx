import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, clearCart } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge = totalPrice > 0 ? 50 : 0;

  const grandTotal = totalPrice + deliveryCharge;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8">
          Shopping Cart
        </h1>

        <div className="bg-white rounded-xl shadow p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Your cart is empty 🛒
          </h2>

          <p className="text-gray-500">
            Add some amazing products to your cart.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-xl p-6 h-fit sticky top-24">
          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Total Price</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Delivery</span>
            <span>₹{deliveryCharge}</span>
          </div>

          <hr className="my-5" />

          <div className="flex justify-between text-xl font-bold">
            <span>Grand Total</span>
            <span>₹{grandTotal}</span>
          </div>

          <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">
            Proceed to Checkout
          </button>

          <button
            onClick={clearCart}
            className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;