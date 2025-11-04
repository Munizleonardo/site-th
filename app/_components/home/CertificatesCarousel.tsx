import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { Shield, FileText, ScrollText } from "lucide-react";
import Link from "next/link";

const certificates = [
  {
    id: 1,
    icon: Shield,
    title: "Pessoa Física",
    content:"e-CPF",
    description: "Certificado digital para pessoa física armazenado no computador ou em mídia, com validade de 3 anos. Ideal para uso individual em aplicações web.",
    color: "text-blue-500",
  },
  {
    id: 2,
    icon: FileText,
    title: "Pessoa Jurídica",
    content:"e-CNPJ",
    description: "Certificado digital para pessoa jurídica armazenado no computador ou em mídia, com validade de 3 anos. Perfeito para pequenas empresas.",
    color: "text-purple-500",
  },
  {
    id: 3,
    icon: ScrollText,
    title: "SafeID Nuvem",
    content:"Pessoa Física | Pessoa Jurídica",
    description: "Certificado digital para pessoa jurídica ou física com validade de 4 anos em nuvem. Renove o seu período de uso, sem precisar de videoconferência.",
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

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {certificates.map((cert) => {
            const Icon = cert.icon;
            return (
              <Card key={cert.id} className="card-hover bg-card">
                <CardHeader className="grid place-items-center">
                  <div className={`w-16 h-16 rounded-lg bg-accent flex items-center justify-center mb-4 ${cert.color}`}>
                    <Icon className="h-8 w-8 " />
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <CardContent className="text-xl font-bold text-black">{cert.content}</CardContent>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {cert.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center aling-center mt-8">
          <Link href="/certificados">
            <Button className="w-80 bg-primary hover:text-black">
              Confira os Produtos
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};
