import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function OrderSuccess() {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  const orderId =
    "QK" + Math.floor(100000 + Math.random() * 900000);

  const handleContinueShopping = () => {
    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gray-50 px-6 py-10">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl text-center border border-gray-100">
        <div className="text-7xl mb-5">🎉</div>

        <h1 className="text-4xl font-bold text-green-600 mb-3">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Thank you for shopping with QuickKart.
          <br />
          Your order has been confirmed successfully.
        </p>

        <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8">
          <div className="flex justify-between py-2">
            <span className="font-medium text-gray-600">
              Order ID
            </span>

            <span className="font-bold">
              #{orderId}
            </span>
          </div>

          <hr />

          <div className="flex justify-between py-2">
            <span className="font-medium text-gray-600">
              Payment
            </span>

            <span>Cash on Delivery</span>
          </div>

          <hr />

          <div className="flex justify-between py-2">
            <span className="font-medium text-gray-600">
              Estimated Delivery
            </span>

            <span>3 - 5 Business Days</span>
          </div>
        </div>

        <button
          onClick={handleContinueShopping}
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-xl font-semibold transition duration-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;