import { Category } from "@/types/models";
import { BaseRepository } from "./base.repository";

export class CategoryRepository extends BaseRepository<Category> {
  constructor() {
    super("categories");
  }

  async getWithChildren(): Promise<Category[]> {
    return this.getAll({ populate: ["children", "image"] });
  }
}
