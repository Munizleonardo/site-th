"use client"

import Header from "@/app/_components/Header";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Shield, FileCheck, FileText, ScrollText, Check } from "lucide-react";

import { useState } from "react";

const certificates = [
  {
    id: 1,
    icon: Shield,
    title: "e-CPF A1",
    validity: "1 ano",
    price: "R$ 150,00",
    link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/cb61f5c6-2749-4e78-9aa8-118618c46840",
    features: [
      "Armazenado no computador",
      "Instalação simples",
      "Ideal para uso pessoal",
      "Validade jurídica total",
    ],
  },
  {
    id: 2,
    icon: FileCheck,
    title: "e-CPF A3",
    validity: "3 anos - Só Certificado",
    price: "R$ 249,90",
    link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/e4568f27-d2a2-437b-9513-90cb6d7c03ed",
    features: [
      "Necessita de mídia",
      "Maior segurança",
      "Ideal para empresários",
      "Portabilidade garantida",
    ],
  },
  {
    id: 3,
    icon: FileText,
    title: "e-CNPJ A1",
    validity: "1 ano",
    price: "R$ 220,00",
    link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/d61fa9c3-ad5f-41f9-b058-6743d2d182ad",
    features: [
      "Para pessoa jurídica",
      "Emissão de notas fiscais",
      "Facilita processos digitais",
      "Economia de tempo",
    ],
  },
  {
    id: 4,
    icon: ScrollText,
    title: "e-CNPJ A3",
    validity: "3 anos - Só Certificado",
    price: "R$ 299,90",
    link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/f1aebe8d-4649-4977-87ea-97678917967a",
    features: [
      "Máxima segurança empresarial",
      "Necessita de mídia",
      "Assinatura digital de documentos",
      "Conformidade legal garantida",
    ],
  },
  {
    id: 5,
    icon: Shield,
    title: "e-CPF - SafeID",
    validity: "1 ano (4 anos em nuvem)",
    price: "R$ 170,00",
    link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/573e9949-1ab4-474b-b8c4-d6237160eea8",
    features: [
      "Utilização pelo celular",
      "Armazenamento no celular",
      "Assinatura digital de documentos",
      "Facilidade de uso",
    ],
  },
  {
    id: 6,
    icon: FileCheck,
    title: "NF-e",
    validity: "1 ano",
    price: "R$ 240,00",
    link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/eb1246d2-45a2-4eaf-bea7-e9ee9d7b3535",
    features: [
      "Emissão de notas fiscais",
      "Simplificação fiscal",
      "Vinculação a terceiros",
      "Conformidade legal garantida",
    ],
  },
  {
    id: 7,
    icon: FileText,
    title: "OAB A3",
    validity: "3 anos - Só Certificado",
    price: "R$ 130,00",
    link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/e4850e25-d0fe-4fc9-bbb5-656a074dc904",
    features: [
      "Certificado digital para advogados",
      "Validade jurídica",
      "Assinatura digital de documentos",
      "Conformidade legal garantida",
    ],
  },
  {
    id: 8,
    icon: ScrollText,
    title: "e-PJ A1",
    validity: "1 ano",
    price: "R$ 250,00",
    link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/e51aa6ce-4e11-44e7-a4ee-c472a68cebaf",
    features: [
      "Voltado para empresas inativas",
      "Emissão de notas fiscais",
      "Assinatura digital de documentos",
      "Regularização de empresas",
    ],
  },
];

export default function Certificados() {
  const [cep, setCep] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [needReader, setNeedReader] = useState("");
  
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-background py-">
      <div className="mb-4 mt-4 container mx-auto px-4 text-center">
          <h1 className="text-gradient mb-2 text-5xl font-bold md:text-6xl">
            Certificados Digitais
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Garanta a segurança e autenticidade das suas transações digitais com
            nossos certificados ICP-Brasil
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certificates.map((cert) => {
              const Icon = cert.icon;
              return (
                <Card key={cert.id} className="card-hover">
                  <CardHeader>
                    <div className="bg-primary/10 mb-2 flex h-16 w-16 items-center justify-center rounded-lg">
                      <Icon className="text-primary h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">{cert.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      Validade: {cert.validity}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary mb-4 text-2xl font-bold">
                      {cert.price}
                    </p>
                    <ul className="mb-3 space-y-2">
                      {cert.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={cert.link} target="_blank">
                      <Button className="bg-primary hover:bg-primary-hover w-full">
                        Solicitar Agora
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
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

        <section id="renovacao" className="bg-accent py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-4xl font-bold">
                Renovação de Certificado
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Seu certificado está vencendo? Renove agora de forma rápida e sem
                complicações. Garantimos o melhor preço e atendimento
                personalizado.
              </p>
              <Link
                href="https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce"
                target="_blank"
              >
                <Button className="btn-hero">Renovar Agora</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-4xl font-bold">
                O que é Certificado Digital?
              </h2>
              <div className="prose prose-lg mx-auto">
                <p className="text-muted-foreground mb-4">
                  O Certificado Digital é uma identidade eletrônica que permite a
                  identificação segura e inequívoca do autor de uma mensagem ou
                  transação feita em meios eletrônicos, como a internet.
                </p>
                <p className="text-muted-foreground mb-4">
                  Funciona como uma carteira de identidade virtual e garante
                  autenticidade, confidencialidade, integridade e não repúdio nas
                  operações realizadas no ambiente digital.
                </p>
                <p className="text-muted-foreground">
                  É obrigatório para empresas que emitem notas fiscais
                  eletrônicas, prestam serviços ao governo e realizam transações
                  que exigem validação jurídica digital.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
