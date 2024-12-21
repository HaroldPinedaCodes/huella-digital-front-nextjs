import { ProductRepository } from "../repositories/product.repository";
import { Product } from "@/types/models";

export class ProductService {
  private repository: ProductRepository;

  constructor() {
    this.repository = new ProductRepository();
  }

  async getAllProducts(): Promise<Product[]> {
    return this.repository.getAll();
  }

  async getProductBySlug(slug: string): Promise<Product> {
    return this.repository.getBySlug(slug);
  }

  async getProductsByCategory(categorySlug: string): Promise<Product[]> {
    return this.repository.getByCategory(categorySlug);
  }

  // async getFeaturedProducts(): Promise<Product[]> {
  //   return this.repository.getFeatured();
  // }
}
