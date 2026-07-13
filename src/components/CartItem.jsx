import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-5 mb-5">
      {/* Left */}
      <div className="flex items-center gap-5">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg"
        />

        <div>
          <h2 className="text-xl font-semibold">
            {item.name}
          </h2>

          <p className="text-green-600 font-bold mt-2">
            ₹{item.price}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        {/* Quantity */}
        <div className="flex items-center border rounded-lg overflow-hidden">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg"
          >
            -
          </button>

          <span className="px-5 font-semibold">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg"
          >
            +
          </button>
        </div>

        {/* Subtotal */}
        <div className="w-24 text-center font-bold text-lg">
          ₹{item.price * item.quantity}
        </div>

        {/* Remove */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700 text-xl"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default CartItem;