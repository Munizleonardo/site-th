import Link from "next/link"
import { Instagram, Facebook, Linkedin } from "lucide-react";

function getCurrentYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear;
}
const year = getCurrentYear();

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary font-bold text-xl">
                <img src="/logopng.png" alt="Logo" />
              </div>
              <span className="font-bold text-xl">TH TECNOLOGIA E CONSULTORIA LTDA</span>
            </div>
            <p className="text-primary-foreground/90 mb-4">
              Especialistas em Certificados Digitais e Planos de Saúde. 
              Segurança e qualidade de vida para você e sua empresa.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/thcertificadora/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/certificados" className="hover:opacity-80 transition-opacity">
                  Certificados Digitais
                </Link>
              </li>
              <li>
                <Link href="/healthplans" className="hover:opacity-80 transition-opacity">
                  Planos e Seguros
                </Link>
              </li>
              <li>
                <Link href="https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0" className="hover:opacity-80 transition-opacity" target="_blank">
                  Suporte Especializado
                </Link>
              </li>
              <li>
                <Link href="https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0" className="hover:opacity-80 transition-opacity" target="_blank">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>Certificado Digital</li>
              <li>Planos e Seguros</li>
              <li>Suporte Especializado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/90">
            © {year} TH Tecnologia e Consultoria LTDA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
