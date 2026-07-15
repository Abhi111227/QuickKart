import { useNavigate } from "react-router-dom";

function OrderSummary({
  totalItems,
  totalPrice,
  deliveryCharge,
  grandTotal,
  onPlaceOrder,
}) {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    const isValid = onPlaceOrder();

    if (isValid) {
      navigate("/order-success");
    }
  };

  return (
    <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 sticky top-24">
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

      <button
        onClick={handlePlaceOrder}
        className="w-full mt-6 bg-green-600 hover:bg-green-700 py-3 rounded-xl text-white font-semibold transition-all duration-300"
      >
        Place Order
      </button>
    </div>
  );
}

export default OrderSummary;