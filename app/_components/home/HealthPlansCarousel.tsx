import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { Heart, Car, Briefcase, Home } from "lucide-react";
import Link from "next/link"

const healthPlans = [
  {
    id: 1,
    icon: Heart,
    link:"/forms/formularioHealthPlan",
    company: "Plano de Saúde",
    description: "Plano completo para você que busca qualidade e segurança na saúde. Rede credenciada ampla e atendimento premium.",
  },
  {
    id: 2,
    icon: Car,
    link:"/forms/formularioSecurityCar",
    company: "Seguro Auto",
    description: "Proteja seu carro ou sua moto e tenha segurança para viajar com sua família. Cobertura nacional para se locomover com segurança.",
  },
  {
    id: 3,
    icon: Briefcase,
    link:"https://wa.me/5521970686270",
    company: "Seguro Empresarial",
    description: "Soluções personalizadas para sua empresa. Cuide da saúde dos seus colaboradores com economia.",
  },
  {
    id: 4,
    icon: Home,
    link:"https://wa.me/5521970686270",
    company: "Seguro Residencial",
    description: "Proteja sua família de forma consciente. Em todos os momentos de sua vida.",
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

        <div className="flex justify-center gap-6 flex-wrap sm:flex-row flex-col">
          {healthPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card key={plan.id} className="flex-1 sm:max-w-[25%] max-w-[100%] px-4 justify-between">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{plan.company}</CardTitle>
                  <p className="text-sm font-semibold text-primary"></p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardContent>
                  <Link className="px-4" href={plan.link} target="_blank">
                    <Button variant="outline" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                      Solicitar Cotação
                    </Button>
                  </Link>  
              </Card>
            );
          })}
        </div>
        <Link href="/healthplans" target="_blank">
          <Button variant="outline" className="w-75 bg-primary hover:bg-primary-hover text-primary-foreground">
            Mais Informações
          </Button>
        </Link>
      </div>
    </section>
  );
};
