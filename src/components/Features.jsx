import {
  Truck,
  ShieldCheck,
  Headphones,
  RotateCcw,
} from "lucide-react";

const features = [
  {
    icon: <Truck size={40} />,
    title: "Free Delivery",
    description: "Free delivery on orders above ₹499",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Secure Payment",
    description: "100% safe and secure payments",
  },
  {
    icon: <Headphones size={40} />,
    title: "24/7 Support",
    description: "We're here whenever you need us",
  },
  {
    icon: <RotateCcw size={40} />,
    title: "Easy Returns",
    description: "Hassle-free returns within 7 days",
  },
];

function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Shop With Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 text-center shadow hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center text-green-600 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;