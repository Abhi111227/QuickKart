import {
  Truck,
  ShieldCheck,
  Leaf,
  Headphones,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Truck size={40} className="text-green-600" />,
      title: "Free Delivery",
      desc: "Free delivery on orders above ₹499.",
    },
    {
      icon: <ShieldCheck size={40} className="text-green-600" />,
      title: "Secure Payment",
      desc: "100% secure and trusted payment methods.",
    },
    {
      icon: <Leaf size={40} className="text-green-600" />,
      title: "Fresh Products",
      desc: "Farm fresh fruits and vegetables every day.",
    },
    {
      icon: <Headphones size={40} className="text-green-600" />,
      title: "24/7 Support",
      desc: "We're always here to help you anytime.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-3xl font-bold text-center">
          Why Shop With Us?
        </h2>

        <p className="text-gray-500 text-center mt-2 mb-10">
          Experience convenience, quality and trust with every order.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;