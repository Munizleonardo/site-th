import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { Heart, Car, Briefcase, Home } from "lucide-react";
import Link from "next/link"

const healthPlans = [
  {
    id: 1,
    icon: Heart,
    company: "Plano de Saúde",
    description: "Plano completo para você que busca qualidade e segurança na saúde. Rede credenciada ampla e atendimento premium.",
  },
  {
    id: 2,
    icon: Car,
    company: "Seguro Auto",
    description: "Proteja toda sua família com um único plano. Cobertura nacional para se locomover com segurança.",
  },
  {
    id: 3,
    icon: Briefcase,
    company: "Seguro Empresarial",
    description: "Soluções personalizadas para sua empresa. Cuide da saúde dos seus colaboradores com economia.",
  },
  {
    id: 4,
    icon: Home,
    company: "Seguro Residencial",
    description: "Proteja sua família de forma consciente. Em todos os momentos de sua vida.",
  },
];

export default function HealthPlansCarousel() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Planos de Saúde e Seguros para Você
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as maiores seguradoras do Brasil para oferecer as melhores condições
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card key={plan.id} className="card-hover bg-card border-2 border-border">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{plan.company}</CardTitle>
                  <p className="text-sm font-semibold text-primary"></p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {plan.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center aling-center mt-8">
          <Link href="/healthplans">
            <Button variant="outline" className="w-75 bg-primary hover:bg-primary-hover text-primary-foreground">
              Mais Informações
            </Button>
          </Link>
        </div>
        
      </div>
    </section>
  );
};
