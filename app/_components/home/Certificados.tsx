import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Shield, FileCheck, FileText, ScrollText, Check } from "lucide-react";

const certificates = [
  {
    id: 1,
    icon: Shield,
    title: "e-CPF A1",
    validity: "1 ano",
    price: "A partir de R$ 150,00",
    features: [
      "Armazenado no computador",
      "Instalação simples",
      "Ideal para uso pessoal",
      "Validade jurídica total",
    ],
  },
  {
    id: 2,
    icon: FileCheck,
    title: "e-CPF A3",
    validity: "1 a 3 anos",
    price: "A partir de R$ 220,00",
    features: [
      "Token ou Cartão com chip",
      "Maior segurança",
      "Ideal para empresários",
      "Portabilidade garantida",
    ],
  },
  {
    id: 3,
    icon: FileText,
    title: "e-CNPJ A1",
    validity: "1 ano",
    price: "A partir de R$ 200,00",
    features: [
      "Para pessoa jurídica",
      "Emissão de notas fiscais",
      "Facilita processos digitais",
      "Economia de tempo",
    ],
  },
  {
    id: 4,
    icon: ScrollText,
    title: "e-CNPJ A3",
    validity: "1 a 3 anos",
    price: "A partir de R$ 380,00",
    features: [
      "Máxima segurança empresarial",
      "Token ou Cartão",
      "Assinatura digital de documentos",
      "Conformidade legal garantida",
    ],
  },
];

export default function Certificados() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Certificados Digitais
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Garanta a segurança e autenticidade das suas transações digitais com nossos certificados ICP-Brasil
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => {
              const Icon = cert.icon;
              return (
                <Card key={cert.id} className="card-hover">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">Validade: {cert.validity}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">{cert.price}</p>
                    <ul className="space-y-2 mb-6">
                      {cert.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary-hover">
                      Solicitar Agora
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Renewal Section */}
      <section id="renovacao" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Renovação de Certificado</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Seu certificado está vencendo? Renove agora de forma rápida e sem complicações. 
              Garantimos o melhor preço e atendimento personalizado.
            </p>
            <Button className="btn-hero">
              Renovar Certificado
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">O que é Certificado Digital?</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-muted-foreground mb-4">
                O Certificado Digital é uma identidade eletrônica que permite a identificação segura e 
                inequívoca do autor de uma mensagem ou transação feita em meios eletrônicos, como a internet.
              </p>
              <p className="text-muted-foreground mb-4">
                Funciona como uma carteira de identidade virtual e garante autenticidade, confidencialidade, 
                integridade e não repúdio nas operações realizadas no ambiente digital.
              </p>
              <p className="text-muted-foreground">
                É obrigatório para empresas que emitem notas fiscais eletrônicas, prestam serviços ao 
                governo e realizam transações que exigem validação jurídica digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
