import { CategoryRepository, ProductService } from "@/lib/api";

import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { CategoryList } from "@/components/common/CategoryList";
import { ProductGrid } from "@/components/products/ProductGrid";

export default async function HomePage() {
  const productService = new ProductService();
  const categoryRepo = new CategoryRepository();

  const [getAllProducts, categories] = await Promise.all([
    productService.getAllProducts(),
    categoryRepo.getAll(),
  ]);

  console.log(getAllProducts);

  return (
    <div className="space-y-12">
      <Hero />

      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Categorías</h2>
        <CategoryList categories={categories} />
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Productos Destacados</h2>
        <ProductGrid products={getAllProducts} />
      </section>

      <Features />
    </div>
  );
}
