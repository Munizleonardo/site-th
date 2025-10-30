import { Card, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { Heart, Car, Briefcase, Home } from "lucide-react";
import Link from "next/link"

const healthPlans = [
  {
    id: 1,
    icon: Heart,
    link:"/healthplans",
    company: "Plano de Saúde",
  },
  {
    id: 2,
    icon: Car,
    link:"/healthplans",
    company: "Seguro Auto",
  },
  {
    id: 3,
    icon: Briefcase,
    link:"/healthplans",
    company: "Seguro Empresarial",
  },
  {
    id: 4,
    icon: Home,
    link:"/healthplans",
    company: "Seguro Residencial",
  },
];

export default function HealthPlansCarousel() {
  return (
    <section className="py-20 bg-background px-4">
      <div className="flex flex-col items-center mx-auto max-w-7xl gap-12">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Planos de Saúde e Seguros para Você
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as maiores seguradoras do Brasil para oferecer as melhores condições
          </p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap sm:flex-row flex-col sm:w-[100%] w-[100%]">
          {healthPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card key={plan.id} className="flex-1 sm:max-w-[25%] max-w-[100%] px-4 justify-between gap-2">
                <CardHeader className="grid place-items-center">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center ">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.company}</CardTitle>
                  
                </CardHeader>
                  <Link className="px-4" href={plan.link} target="_blank">
                    <Button variant="outline" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                      Mais Informações
                    </Button>
                  </Link>  
              </Card>
            );
          })}
        </div>
        <p className="sm:text-4xl text-2xl font-bold text-primary max-w-2xl mx-auto animate-flash">
          Realize uma cotação sem compromisso
        </p>
      </div>  
    </section>
)};

