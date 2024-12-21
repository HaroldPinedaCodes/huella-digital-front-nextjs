import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

// components/products/ProductCard.tsx
interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
}

export const ProductCard = ({ name, price, image, slug }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden">
      <Link href={`/products/${slug}`}>
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
      </Link>

      <CardContent className="p-4">
        <h3 className="font-medium">{name}</h3>
        <p className="mt-1 font-bold text-lg">${price.toFixed(2)}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Añadir al carrito</Button>
      </CardFooter>
    </Card>
  );
};
