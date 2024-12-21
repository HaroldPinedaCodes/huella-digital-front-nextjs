import { Category } from "@/types/models";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface CategoryListProps {
  categories: Category[];
}

export const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/products?category=${category.slug}`}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              {category.image ? (
                <Image
                  src={category.image.url}
                  alt={category.name}
                  width={500}
                  height={500}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-4" />
              )}
              <h3 className="font-medium text-center">{category.name}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};
