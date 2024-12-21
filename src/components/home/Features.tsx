import { Card, CardContent } from "@/components/ui/card";
import { Truck, ShieldCheck, Clock, CreditCard } from "lucide-react";

const features = [
  {
    title: "Envío Gratis",
    description: "En pedidos superiores a $50",
    icon: Truck,
  },
  {
    title: "Pago Seguro",
    description: "Métodos de pago seguros",
    icon: CreditCard,
  },
  {
    title: "Atención 24/7",
    description: "Soporte cuando lo necesites",
    icon: Clock,
  },
  {
    title: "Garantía de Calidad",
    description: "Productos de primera calidad",
    icon: ShieldCheck,
  },
];

export const Features = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="p-6">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
