import Link from "next/link";
import { Instagram } from "lucide-react";
import LogoParks from "@/app/_components/LogoParks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="text-primary flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold">
                <img src="/favicon.png" alt="Logo" />
              </div>
              <span className="text-xl font-bold">
                TH TECNOLOGIA E CONSULTORIA LTDA
              </span>
            </div>
            <p className="text-primary-foreground/90 mb-4">
              Especialistas em Certificados Digitais e Planos de Saúde.
              Segurança e qualidade de vida para você e sua empresa.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/thcertificadora/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/certificados"
                  className="transition-opacity hover:opacity-80"
                >
                  Certificados Digitais
                </Link>
              </li>
              <li>
                <Link
                  href="/healthplans"
                  className="transition-opacity hover:opacity-80"
                >
                  Planos e Seguros
                </Link>
              </li>
              <li>
                <Link
                  href="https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0"
                  className="transition-opacity hover:opacity-80"
                  target="_blank"
                >
                  Suporte Especializado
                </Link>
              </li>
              <li>
                <Link
                  href="https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0"
                  className="transition-opacity hover:opacity-80"
                  target="_blank"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2">
              <li>Certificado Digital</li>
              <li>Planos e Seguros</li>
              <li>Suporte Especializado</li>
            </ul>
          </div>
        </div>

        <div className="border-primary-foreground/20 border-t pt-8 text-center">
          <p className="text-primary-foreground/90">
            © {year} TH Tecnologia e Consultoria LTDA. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <p className="text-primary-foreground/98">Desenvolvido por</p>
        <Link href="https://parkscompany.com.br" target="_blank">
          <LogoParks />
        </Link>
      </div>
    </footer>
  );
}
