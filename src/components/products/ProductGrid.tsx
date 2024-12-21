import { Product } from "@/types/models";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  // Función helper para construir la URL de la imagen
  const getImageUrl = (imageUrl: string) => {
    if (!imageUrl) return "";
    // Si la URL es absoluta (comienza con http o https), la usamos directamente
    if (imageUrl.startsWith("http")) return imageUrl;
    // Si no, la concatenamos con la URL base
    return `${apiUrl}${imageUrl}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <Link href={`/products/${product.slug}`}>
            <div className="relative h-48 w-full">
              {product.images?.[0] ? (
                <Image
                  src={getImageUrl(product.images[0].formats.small.url)}
                  alt={product.name}
                  fill // Usar fill en lugar de width/height para ocupar el contenedor padre
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
            </div>
          </Link>
          <CardContent className="p-4 flex-grow">
            <Link href={`/products/${product.slug}`}>
              <h3 className="font-medium hover:text-primary">{product.name}</h3>
            </Link>
            <p className="mt-2 text-lg font-bold">
              ${product.priceClient.toLocaleString()}
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full">Añadir al carrito</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
