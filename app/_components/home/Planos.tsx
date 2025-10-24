import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Heart, Users, Briefcase, Home, Check } from "lucide-react";
import Image from "next/image"

const plans = [
  {
    id: 1,
    icon: Heart,
    company: "Bradesco Saúde",
    plan: "Plano Individual",
    price: "A partir de R$ 300,00/mês",
    features: [
      "Cobertura nacional",
      "Telemedicina incluída",
      "Rede credenciada premium",
      "Sem carência para urgência",
    ],
  },
  {
    id: 2,
    icon: Users,
    company: "SulAmérica",
    plan: "Plano Familiar",
    price: "A partir de R$ 800,00/mês",
    features: [
      "Até 6 dependentes",
      "Cobertura completa",
      "Melhores hospitais",
      "Atendimento 24h",
    ],
  },
  {
    id: 3,
    icon: Briefcase,
    company: "Amil",
    plan: "Plano Empresarial",
    price: "Consulte condições",
    features: [
      "A partir de 2 vidas",
      "Descontos progressivos",
      "Gestão simplificada",
      "Sem limite de idade",
    ],
  },
  {
    id: 4,
    icon: Home,
    company: "Unimed",
    plan: "Plano Completo",
    price: "A partir de R$ 450,00/mês",
    features: [
      "Livre escolha de médicos",
      "Cobertura internacional",
      "Check-up anual gratuito",
      "Programa de bem-estar",
    ],
  },
];

const insurers = [
  { name: "Bradesco Saúde", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bradesco_logo.svg" },
  { name: "SulAmérica", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/SulAmerica_logo.svg" },
  { name: "Amil", logo: "https://logodownload.org/wp-content/uploads/2020/02/amil-logo.png" },
  { name: "Unimed", logo: "https://logodownload.org/wp-content/uploads/2014/05/unimed-logo.png" },
];

export default function Planos() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Planos de Saúde e Seguros
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proteja você e sua família com os melhores planos de saúde do mercado. 
            Trabalhamos com as maiores e mais confiáveis seguradoras do Brasil.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-background border-y">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            Nossas Parceiras
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {insurers.map((insurer) => (
              <div key={insurer.name} className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <Image src={insurer.logo} alt={insurer.name} className="h-12 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Escolha seu Plano Ideal</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <Card key={plan.id} className="card-hover border-2">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{plan.company}</CardTitle>
                    <CardDescription className="text-base font-semibold text-primary">
                      {plan.plan}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">{plan.price}</p>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary-hover">
                      Solicitar Cotação
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Não encontrou o plano ideal?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco! Nossa equipe especializada vai encontrar o plano 
            perfeito para suas necessidades e orçamento.
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
            Falar com Especialista
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Por que escolher a TH Tecnologia?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Atendimento Personalizado</h3>
                  <p className="text-muted-foreground">
                    Cada cliente é único. Analisamos seu perfil para indicar o melhor plano.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Melhores Condições</h3>
                  <p className="text-muted-foreground">
                    Negociamos diretamente com as seguradoras para você ter o melhor preço.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Suporte Contínuo</h3>
                  <p className="text-muted-foreground">
                    Nossa equipe está sempre disponível para ajudar no que precisar.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Parceiros Confiáveis</h3>
                  <p className="text-muted-foreground">
                    Trabalhamos apenas com as maiores e mais respeitadas seguradoras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
