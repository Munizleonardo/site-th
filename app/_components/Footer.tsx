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
                TH
              </div>
              <span className="font-bold text-xl">TH Tecnologia</span>
            </div>
            <p className="text-primary-foreground/90 mb-4">
              Especialistas em Certificados Digitais e Planos de Saúde. 
              Segurança e qualidade de vida para você e sua empresa.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/th_tecnologia" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Linkedin className="h-6 w-6" />
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
                <Link href="/planos" className="hover:opacity-80 transition-opacity">
                  Planos de Saúde
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="hover:opacity-80 transition-opacity">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="hover:opacity-80 transition-opacity">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>e-CPF</li>
              <li>e-CNPJ</li>
              <li>NF-e</li>
              <li>Planos Empresariais</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/90">
            © year TH Tecnologia de Certificados Digitais e Planos de Saúde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
