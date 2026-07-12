import {
  ShoppingCart,
  Laptop,
  Shirt,
  House,
  BookOpen,
  HeartPulse,
} from "lucide-react";

const categories = [
  {
    name: "Grocery",
    icon: <ShoppingCart size={40} />,
  },
  {
    name: "Electronics",
    icon: <Laptop size={40} />,
  },
  {
    name: "Fashion",
    icon: <Shirt size={40} />,
  },
  {
    name: "Home",
    icon: <House size={40} />,
  },
  {
    name: "Books",
    icon: <BookOpen size={40} />,
  },
  {
    name: "Health",
    icon: <HeartPulse size={40} />,
  },
];

function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 cursor-pointer p-8 flex flex-col items-center gap-4 hover:-translate-y-2"
            >
              <div className="text-green-600">{category.icon}</div>

              <h3 className="font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;