"use client";

import Header from "@/app/_components/Header";
import ContactSection from "@/app/_components/ContactSection";
import Footer from "@/app/_components/Footer";
import CertificateChoiceBox from "@/app/_components/certificados/CertificateChoiceBox";
import { useState } from "react";

const offers: Record<string, { price: string; href: string }> = {
  "CPF|A1": {
    price: "R$ 175,00",
    href: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/cb61f5c6-2749-4e78-9aa8-118618c46840",
  },
  "CPF|A3|1 ano": {
    price: "R$ 180,00",
    href: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/558e2d16-2124-4f44-af8e-f20d43739d48",
  },
  "CPF|A3|2 anos": {
    price: "R$ 199,00",
    href: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/69ecf8b1-45ba-4a2c-a0e0-7bbb3e68372d",
  },
  "CPF|A3|3 anos": { price: "Não Disponível!", href: "/certificados" },
};

export default function CertificadoCpfPage() {
  const [cep, setCep] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [needReader, setNeedReader] = useState("");

  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-background pt-28 pb-20">
        <div className="container mx-auto flex justify-center px-4">
          <CertificateChoiceBox kind="cpf" offers={offers} />
        </div>
      </section>
      <section className="mx-auto mt-6 max-w-4xl px-6">
        <div className="mb-10 flex flex-col gap-10 rounded-3xl border bg-white p-10">
          <div>
            <h2 className="mb-3 text-3xl font-bold text-gray-900">
              Precisa de Mídia?
            </h2>
            <p className="text-lg text-gray-600">
              Informe os dados abaixo para cotação de envio da mídia.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-lg font-semibold text-gray-800">
              CEP de Entrega
            </label>
            <input
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="00000-000"
              className="h-14 rounded-xl border border-gray-300 px-4 text-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          {cep.length >= 8 && (
            <div className="flex flex-col gap-3">
              <label className="text-lg font-semibold text-gray-800">
                Tipo de Mídia
              </label>
              <select
                value={mediaType}
                onChange={(e) => {
                  setMediaType(e.target.value);
                  setNeedReader("");
                }}
                className="h-14 rounded-xl border border-gray-300 px-4 text-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="">Selecione</option>
                <option value="Cartão">Cartão</option>
                <option value="Token">Token</option>
              </select>
            </div>
          )}

          {mediaType === "Cartão" && (
            <div className="flex flex-col gap-3">
              <label className="text-lg font-semibold text-gray-800">
                Necessita Leitora?
              </label>
              <select
                value={needReader}
                onChange={(e) => setNeedReader(e.target.value)}
                className="h-14 rounded-xl border border-gray-300 px-4 text-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>
          )}

          {cep && mediaType && (mediaType !== "Cartão" || needReader) && (
            <a
              href={`https://wa.me/5521970686270?text=${encodeURIComponent(
                `Olá! Gostaria de comprar uma mídia do tipo ${mediaType} para entrega no CEP ${cep}.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/80 mt-6 flex h-16 items-center justify-center rounded-xl text-lg font-semibold text-white transition"
            >
              Solicitar Cotação WhatsApp
            </a>
          )}
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
}
