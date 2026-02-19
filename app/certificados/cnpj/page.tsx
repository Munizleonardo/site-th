"use client"

import Header from "@/app/_components/Header";
import ContactSection from "@/app/_components/ContactSection";
import Footer from "@/app/_components/Footer";
import CertificateChoiceBox from "@/app/_components/certificados/CertificateChoiceBox";
import { useState } from "react";

const offers: Record<string, { price: string; href: string }> = {
  "CNPJ|A1": { price: "R$ 220,00", href: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/d61fa9c3-ad5f-41f9-b058-6743d2d182ad" },
  "CNPJ|A3|1 ano": { price: "R$ 240,00", href: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/edf06469-8da5-4b60-a492-aea7a4325ac3" },
  "CNPJ|A3|2 anos": { price: "R$ 269,90", href: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/1e86c3b4-2e81-4a42-86b8-36e6b46d5b3f" },
  // "CNPJ|A3|3 anos": { price: "R$ 299,90", href: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/f1aebe8d-4649-4977-87ea-97678917967a" },
};

export default function CertificadoCnpjPage() {
  const [cep, setCep] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [needReader, setNeedReader] = useState("");
  
  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-background pb-20 pt-28">
        <div className="container mx-auto flex justify-center px-4">
          <CertificateChoiceBox kind="cnpj" offers={offers} />
        </div>
      </section>
      <section className="max-w-4xl mt-6 mx-auto px-6">
        <div className="bg-white rounded-3xl border p-10 flex flex-col gap-10 mb-10">

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
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
              className="h-14 px-4 rounded-xl border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                className="h-14 px-4 rounded-xl border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                className="h-14 px-4 rounded-xl border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>
          )}

          {cep &&
            mediaType &&
            (mediaType !== "Cartão" || needReader) && (
              <a
                href={`https://wa.me/5521970686270?text=${encodeURIComponent(
                  `Olá! Gostaria de comprar uma mídia do tipo ${mediaType} para entrega no CEP ${cep}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 h-16 rounded-xl bg-primary hover:bg-primary/80 text-white text-lg font-semibold flex items-center justify-center transition"
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
