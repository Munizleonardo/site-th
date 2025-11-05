import Header from "@/app/_components/Header";
import Link from "next/link"
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Shield, FileCheck, FileText, ScrollText, Check } from "lucide-react";

const certificates = [
  {
    id: 1,
    icon: Shield,
    title: "e-CPF A1",
    validity: "1 ano",
    price: "R$ 170,00",
    link:"https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/cb61f5c6-2749-4e78-9aa8-118618c46840",
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
    validity: "3 anos - Só Certificado",
    price: "R$ 249,90",
    link:"https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/e4568f27-d2a2-437b-9513-90cb6d7c03ed",
    features: [
      "Necessita de Mídia",
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
    price: "R$ 240,00",
    link:"https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/d61fa9c3-ad5f-41f9-b058-6743d2d182ad",
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
    validity: "3 anos - Só Certificado",
    price: "R$ 299,90",
    link:"https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/f1aebe8d-4649-4977-87ea-97678917967a",
    features: [
      "Máxima segurança empresarial",
      "Necessita de Mídia",
      "Assinatura digital de documentos",
      "Conformidade legal garantida",
    ],
  },
  {
    id: 5,
    icon: Shield,
    title: "e-CPF - SafeID",
    validity: "1 ano (4 anos em nuvem)",
    price: "R$ 170,00",
    link:"https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/573e9949-1ab4-474b-b8c4-d6237160eea8",
    features: [
      "Utilização pelo celular",
      "Armazenamento no celular",
      "Assinatura digital de documentos",
      "Facilidade de uso",
    ],
  },
  {
    id: 6,
    icon: FileCheck,
    title: "NF-e",
    validity: "1 ano",
    price: "R$ 240,00",
    link:"https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/eb1246d2-45a2-4eaf-bea7-e9ee9d7b3535",
    features: [
      "Emissão de Notas Fiscais",
      "Simplificação Fiscal",
      "Vinculação a Terceiros",
      "Conformidade legal garantida",
    ],
  },
  {
    id: 7,
    icon: FileText,
    title: "OAB A3",
    validity: "3 anos - Só Certificado",
    price: "R$ 130,00",
    link:"https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/e4850e25-d0fe-4fc9-bbb5-656a074dc904",
    features: [
      "Certificado digital para Advogados",
      "Validade Jurídica",
      "Portabilidade Garantida",
      "Conformidade legal garantida",
    ],
  },
  {
    id: 8,
    icon: ScrollText,
    title: "e-PJ A1",
    validity: "1 ano",
    price: "R$ 250,00",
    link:"https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/e51aa6ce-4e11-44e7-a4ee-c472a68cebaf",
    features: [
      "Voltado para Empresas Inativas",
      "Emissão de Notas Fiscais",
      "Assinatura digital de documentos",
      "Regularização de Empresas",
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
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-gradient">
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
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">Validade: {cert.validity}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">{cert.price}</p>
                    <ul className="space-y-2 mb-3">
                      {cert.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={cert.link} target="_blank">
                      <Button className="w-full bg-primary hover:bg-primary-hover">
                        Solicitar Agora
                      </Button> 
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mídia Section */}
      <section id="midia" className="py-10 mb-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Precisa de Mídia Para Seu Certificado Digital?</h2>
            <p className="text-lg text-muted-foreground mb-8">
            O certificado digital A3 é considerado mais seguro do que o A1, que fica armazenado no computador. O uso de uma mídia física, como um token USB ou um smart card(cartão), garante a integridade e a autenticidade das transações digitais, pois a chave privada do certificado é armazenada de forma segura e não pode ser copiada para outro dispositivo. 
            </p>

            <Card className="card-hover w-90 h-90 mx-auto">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">

                      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="35" cy="35" r="35" fill="currentColor"></circle>
                      <rect x="17.644" y="20.9998" width="38.4648" height="24.8695" rx="4" fill="currentColor" stroke="white"></rect>
                      <rect x="18.144" y="26.3176" width="37.4648" height="5.78791" fill="white" stroke="white"></rect>
                      <rect x="48.4727" y="40.1051" width="5.09093" height="3.11113" rx="1.55556" fill="white"></rect>
                      <path d="M18.3776 39.6805H31.3216V49.4358H18.3776C15.6838 49.4358 13.5 47.252 13.5 44.5582C13.5 41.8643 15.6838 39.6805 18.3776 39.6805Z" fill="currentColor" stroke="white"></path>
                      <path d="M31.6885 42.1091H32.8619C33.5198 42.1091 34.0531 42.6424 34.0531 43.3003V46.0864C34.0531 46.7443 33.5198 47.2776 32.8619 47.2776H31.6885V42.1091Z" fill="currentColor" stroke="white"></path>
                      <path d="M32.0312 43.883C32.0312 43.777 32.1172 43.691 32.2232 43.691H33.3748C33.4808 43.691 33.5667 43.777 33.5667 43.883V43.883C33.5667 43.989 33.4808 44.0749 33.3748 44.0749H32.2232C32.1172 44.0749 32.0312 43.989 32.0312 43.883V43.883Z" fill="white"></path>
                      <path d="M32.0312 45.0345C32.0312 44.9285 32.1172 44.8425 32.2232 44.8425H33.3748C33.4808 44.8425 33.5667 44.9285 33.5667 45.0345V45.0345C33.5667 45.1405 33.4808 45.2264 33.3748 45.2264H32.2232C32.1172 45.2264 32.0312 45.1405 32.0312 45.0345V45.0345Z" fill="white"></path>
                      </svg>
                      
                    </div>
                    <CardTitle className="text-2xl">Mídia Certificado A3</CardTitle>
                    <p className="text-sm text-foreground">Token ou Cartão para envio imediato</p>
                    <p className="text-15 text-foreground">Valor + Frete</p>
                    <p className="text-sm text-muted-foreground">OBS: Para cartões é necessário leitora, consulte informações.</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4"></p>
                    
                    <Link href="https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0" target="_blank">
                      <Button className="w-60 bg-primary hover:bg-primary-hover">
                        Solicitar Agora
                      </Button> 
                    </Link>
                  </CardContent>
                </Card>
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
            <Link href="https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce" target="_blank">
              <Button className="btn-hero">
                Renovar Agora
              </Button> 
            </Link>
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
    </div>
  );
};
