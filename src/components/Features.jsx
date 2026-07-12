import {
  FaShippingFast,
  FaLeaf,
  FaHeadset,
  FaLock,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaShippingFast size={30} />,
      title: "Fast Delivery",
      desc: "Get your order in under 30 minutes.",
    },
    {
      icon: <FaLeaf size={30} />,
      title: "Fresh Products",
      desc: "Hand-picked fresh groceries every day.",
    },
    {
      icon: <FaHeadset size={30} />,
      title: "24/7 Support",
      desc: "Always here to help you.",
    },
    {
      icon: <FaLock size={30} />,
      title: "Secure Payment",
      desc: "100% safe and secure transactions.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all"
          >
            <div className="text-green-600 flex justify-center mb-4">
              {item.icon}
            </div>

            <h2 className="text-xl font-bold">
              {item.title}
            </h2>

            <p className="text-gray-500 mt-2">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Features;