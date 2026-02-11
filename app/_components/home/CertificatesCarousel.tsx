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
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Escolha seu Certificado Digital
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Oferecemos diversos tipos de certificados digitais para atender suas
            necessidades pessoais ou empresariais
          </p>
        </div>

        <div className="grid gap-5 text-center md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => {
            const Icon = cert.icon;
            return (
              <Link
                key={cert.id}
                href={cert.href}
                aria-label={`Ver detalhes: ${cert.title}`}
                className="group focus-visible:ring-primary block rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Card className="card-hover bg-card group-hover:bg-primary group-focus-visible:bg-primary group-focus-visible:text-primary-foreground h-90 w-90 cursor-pointer transition-colors group-hover:text-black">
                  <CardHeader className="grid">
                    <div className="flex flex-row gap-5">
                      <div
                        className={`bg-accent mb-4 flex h-16 w-16 items-center justify-center rounded-lg ${cert.color} group-hover:bg-primary-foreground/15 group-focus-visible:bg-primary-foreground/15 group-focus-visible:text-primary-foreground group-hover:text-black`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="flex-center flex items-center justify-center text-2xl">
                        {cert.title}
                      </CardTitle>
                    </div>
                    <CardContent className="group-focus-visible:text-primary-foreground flex flex-col text-xl font-bold group-hover:text-black">
                      {cert.content}
                    </CardContent>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="group-focus-visible:text-primary-foreground/90 mb-4 text-base group-hover:text-black">
                      {cert.description}
                    </CardDescription>
                    <div className="flex items-end justify-end">
                      <p className="text-primary animate-flash mx-auto flex max-w-2xl items-end justify-end text-3xl font-bold sm:flex sm:items-end sm:justify-end sm:text-2xl lg:items-end">
                        Clique e Compre
                      </p>
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
