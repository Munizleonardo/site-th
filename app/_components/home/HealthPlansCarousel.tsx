import { Card, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { Heart, Car, Briefcase, Home } from "lucide-react";
import Link from "next/link";

const healthPlans = [
  {
    id: 1,
    icon: Heart,
    link: "/healthplans",
    company: "Plano de Saúde",
  },
  {
    id: 2,
    icon: Car,
    link: "/healthplans",
    company: "Seguro Auto",
  },
];

export default function HealthPlansCarousel() {
  return (
    <section className="bg-background px-4 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Planos de Saúde e Seguros Auto
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Trabalhamos com as maiores seguradoras do Brasil para oferecer as
            melhores condições
          </p>
        </div>

        <div className="flex w-[100%] flex-col flex-wrap justify-center gap-4 sm:w-[100%] sm:flex-row">
          {healthPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.id}
                className="max-w-[100%] flex-1 justify-between gap-2 px-4 sm:flex sm:max-w-[100%] sm:flex-col"
              >
                <CardHeader className="grid place-items-center">
                  <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-lg">
                    <Icon className="text-primary h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">{plan.company}</CardTitle>
                </CardHeader>
                <Link className="px-4" href={plan.link}>
                  <Button
                    variant="outline"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground w-full"
                  >
                    Mais Informações
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>
        <p className="text-primary animate-flash mx-auto flex max-w-2xl justify-center text-2xl font-bold sm:flex sm:justify-center sm:text-2xl">
          Realize uma cotação sem compromisso
        </p>
      </div>
    </section>
  );
}
