import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { Shield, FileText, ScrollText } from "lucide-react";
import Link from "next/link";

const certificates = [
  {
    id: 1,
    icon: Shield,
    title: "Pessoa Física",
    content: "e-CPF",
    description:
      "Certificado digital para pessoa física armazenado no computador ou em mídia, com validade de 3 anos. Ideal para uso individual em aplicações web.",
    color: "text-blue-500",
    href: "/certificados/cpf",
  },
  {
    id: 2,
    icon: FileText,
    title: "Pessoa Jurídica",
    content: "e-CNPJ",
    description:
      "Certificado digital para pessoa jurídica armazenado no computador ou em mídia, com validade de 3 anos. Perfeito para pequenas empresas.",
    color: "text-purple-500",
    href: "/certificados/cnpj",
  },
  {
    id: 3,
    icon: ScrollText,
    title: "SafeID Nuvem",
    content: "Pessoa Física | Pessoa Jurídica",
    description:
      "Certificado digital para pessoa jurídica ou física com validade de 4 anos em nuvem. Renove o seu período de uso, sem precisar de videoconferência.",
    color: "text-primary",
    href: "/certificados/nuvem",
  },
];

export default function CertificatesCarousel() {
  return (
    <section className="bg-accent py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Escolha seu Certificado Digital
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Oferecemos diversos tipos de certificados digitais para atender suas
            necessidades pessoais ou empresariais
          </p>
        </div>

        <div className="grid gap-6 text-center md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => {
            const Icon = cert.icon;
            return (
              <Link
                key={cert.id}
                href={cert.href}
                aria-label={`Ver detalhes: ${cert.title}`}
                className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Card className="card-hover bg-card cursor-pointer transition-colors group-hover:bg-primary group-focus-visible:bg-primary group-hover:text-black group-focus-visible:text-primary-foreground">
                  <CardHeader className="grid">
                    <div className="flex flex-row gap-5">
                      <div
                        className={`bg-accent mb-4 flex h-16 w-16 items-center justify-center rounded-lg ${cert.color} group-hover:bg-primary-foreground/15 group-focus-visible:bg-primary-foreground/15 group-hover:text-black group-focus-visible:text-primary-foreground`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="flex-center flex items-center justify-center text-2xl">
                        {cert.title}
                      </CardTitle>
                    </div>
                    <CardContent className="flex flex-col text-xl font-bold group-hover:text-black group-focus-visible:text-primary-foreground">
                      {cert.content}
                    </CardContent>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-base group-hover:text-black group-focus-visible:text-primary-foreground/90">
                      {cert.description}
                    </CardDescription>
                    <div className="flex items-center justify-center">
                      <p className="text-primary animate-flash mx-auto flex max-w-2xl justify-center text-2xl font-bold sm:flex sm:justify-center sm:text-2xl ">Clique e Compre</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* <div className="aling-center mt-8 flex justify-center">
          <Link href="/certificados">
            <Button className="bg-primary w-80 hover:text-black">
              Confira os Produtos
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
