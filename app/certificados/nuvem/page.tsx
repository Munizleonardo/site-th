import Header from "@/app/_components/Header";
import ContactSection from "@/app/_components/ContactSection";
import Footer from "@/app/_components/Footer";
import CertificateChoiceBox from "@/app/_components/certificados/CertificateChoiceBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TH Tecnologia - Certificado em Nuvem",
  description: "Seleção de certificado digital em nuvem (SafeID) para CPF ou CNPJ.",
};

const offers: Record<string, { price: string; href: string }> = {
  "CPF|4 meses": { price: "R$ 70,00", href: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/0ac21f33-634f-454c-b801-5da206654f7f" },
  "CPF|1 ano": { price: "R$ 170,00", href: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/573e9949-1ab4-474b-b8c4-d6237160eea8" },
  // "CPF|3 anos": { price: "R$ 280,00", href: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/a7673a50-5b38-4a20-8a28-2802e5be5f6e" },
  "CNPJ|1 ano": { price: "R$ 240,00", href: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/aa9d127d-7bf8-4fbc-8944-bf205c162652" },
};

export default function CertificadoNuvemPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-background pb-20 pt-28">
        <div className="container mx-auto flex justify-center px-4">
          <CertificateChoiceBox kind="nuvem" offers={offers} />
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
}
