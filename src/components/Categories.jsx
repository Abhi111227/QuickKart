import categories from "../data/categories";

function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-3xl font-bold mb-2">
          Shop by Category
        </h2>

        <p className="text-gray-500 mb-8">
          Browse everything you need in one place.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-4 text-center font-semibold">
                {item.name}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;