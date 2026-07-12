const categories = [
  "🥛 Dairy",
  "🍎 Fruits",
  "🥬 Vegetables",
  "🍞 Bakery",
  "🥤 Beverages",
  "🍪 Snacks",
  "🍚 Grocery",
  "🧴 Personal Care",
];

function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-8 text-center cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;