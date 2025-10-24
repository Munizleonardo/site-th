import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { Heart, Users, Briefcase, Home } from "lucide-react";
import Link from "next/link"

const healthPlans = [
  {
    id: 1,
    icon: Heart,
    company: "Bradesco Saúde",
    plan: "Plano Individual",
    description: "Plano completo para você que busca qualidade e segurança na saúde. Rede credenciada ampla e atendimento premium.",
  },
  {
    id: 2,
    icon: Users,
    company: "SulAmérica",
    plan: "Plano Familiar",
    description: "Proteja toda sua família com um único plano. Cobertura nacional e acesso aos melhores hospitais.",
  },
  {
    id: 3,
    icon: Briefcase,
    company: "Amil",
    plan: "Plano Empresarial",
    description: "Soluções personalizadas para sua empresa. Cuide da saúde dos seus colaboradores com economia.",
  },
  {
    id: 4,
    icon: Home,
    company: "Unimed",
    plan: "Plano Completo",
    description: "Cobertura completa com telemedicina incluída. Atendimento de qualidade onde você estiver.",
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
                  <p className="text-sm font-semibold text-primary">{plan.plan}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {plan.description}
                  </CardDescription>
                  <Link href="/planos">
                    <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                      Consulte Condições
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
