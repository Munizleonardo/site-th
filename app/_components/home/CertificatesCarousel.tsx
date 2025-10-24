import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { Shield, FileCheck, FileText, ScrollText } from "lucide-react";
import Link from "next/link";

const certificates = [
  {
    id: 1,
    icon: Shield,
    title: "e-CPF A1",
    description: "Certificado digital para pessoa física armazenado no computador. Ideal para uso individual em aplicações web.",
    color: "text-blue-500",
  },
  {
    id: 2,
    icon: FileCheck,
    title: "e-CPF A3",
    description: "Certificado digital para pessoa física com chip criptográfico. Maior segurança para transações importantes.",
    color: "text-green-500",
  },
  {
    id: 3,
    icon: FileText,
    title: "e-CNPJ A1",
    description: "Certificado digital para pessoa jurídica armazenado no computador. Perfeito para pequenas empresas.",
    color: "text-purple-500",
  },
  {
    id: 4,
    icon: ScrollText,
    title: "NF-e",
    description: "Certificado digital para emissão de notas fiscais eletrônicas. Essencial para formalização do seu negócio.",
    color: "text-primary",
  },
];

export default function CertificatesCarousel() {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Certificados Digitais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos diversos tipos de certificados digitais para atender suas necessidades pessoais ou empresariais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => {
            const Icon = cert.icon;
            return (
              <Card key={cert.id} className="card-hover bg-card">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-accent flex items-center justify-center mb-4 ${cert.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {cert.description}
                  </CardDescription>
                  <Link href="/certificados">
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                      Saiba Mais
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
