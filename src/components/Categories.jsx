import categories from "../data/categories";

function Categories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-3xl font-bold mb-8">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {categories.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden shadow hover:shadow-xl transition cursor-pointer bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
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