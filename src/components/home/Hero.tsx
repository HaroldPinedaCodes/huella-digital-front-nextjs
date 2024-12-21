import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative h-[500px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/api/placeholder/1920/500"
          alt="Hero background"
          // layout="fill"
          width={1920}
          height={500}
          className="brightness-50 object-fill"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Todo para tu mascota
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Encuentra los mejores productos para el cuidado y diversión de tu
            compañero peludo.
          </p>
          <Button size="lg" asChild>
            <Link href="/products">Ver productos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
