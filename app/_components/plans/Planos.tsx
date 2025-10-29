import Header from "@/app/_components/Header";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Heart, Car, Briefcase, Home } from "lucide-react";
import { Check } from "lucide-react";
import Link from "next/link"

const plans = [
  {
    id: 1,
    icon: Heart,
    company: "Plano de Saúde",
    price: "Consulte condições",
    link:"/forms/formularioHealthPlan",
    
  },
  {
    id: 2,
    icon: Car,
    company: "Seguro Auto",
    price: "Consulte condições",
    link:"/forms/formularioSecurityCar",
    
  },
  {
    id: 3,
    icon: Heart,
    company: "Seguro de Vida",
    price: "Consulte condições",
    link:"https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0",
    
  },
  {
    id: 4,
    icon: Home,
    company: "Seguro Empresarial",
    price: "Consulte condições",
    link:"https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0",
    
  },
  {
    id: 5,
    icon: Briefcase,
    company: "Seguro Fiança",
    price: "Consulte condições",
    link:"https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0",
    
  },
  {
    id: 6,
    icon: Home,
    company: "Financiamento Imóvel",
    price: "Consulte condições",
    link:"https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0",
    
  },
  {
    id: 7,
    icon: Car,
    company: "Financiamento Veículo",
    price: "Consulte condições",
    link:"https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0",
    
  },
  {
    id: 8,
    icon: Home,
    company: "Seguro Residencial",
    price: "Consulte condições",
    link:"https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0",
    
  },
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
            Proteja você e sua família com os melhores planos de saúde do mercado.</p> 
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proteja seus veículos de terceiros e viaje com tranquilidade.</p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabalhamos com as maiores e mais confiáveis seguradoras do Brasil.</p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 bg-background justify-center items-center text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Solicite Cotação</h2>
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
                    
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">{plan.price}</p>
                    <ul className="space-y-2 mb-6">
                     
                    </ul>
                  </CardContent>
                  <div className="flex justify-center aling-center">
                    <Link href={plan.link} target="_blank">
                      <Button className="outline">
                        Solicitar Cotação
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ficou com Dúvida?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco! Nossa equipe especializada vai encontrar o plano 
            perfeito para suas necessidades e orçamento.
          </p>
          <Link href="https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0" target="_blank">
            <Button className="outline bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Falar com Especialista
            </Button>
          </Link>  
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
    </div>
  );
};
