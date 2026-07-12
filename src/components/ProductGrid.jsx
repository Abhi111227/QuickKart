import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">
  Featured Products
</h2>

<p className="text-gray-500 mt-2 mb-8">
  Fresh arrivals specially selected for you.
</p>

      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductGrid;