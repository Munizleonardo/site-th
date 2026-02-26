"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";

type CertificateType = "PESSOA JURÍDICA | e-CNPJ" | "PESSOA FÍSICA | e-CPF" | "PESSOA JURÍDICA INAPTA | e-PJ" | "NUVEM | SafeID" | "ADVOGADOS | OAB" | "NOTAS FISCAIS | NF-e";

type SelectionOption = {
  label: string;
  price?: string;
  link?: string;
};

type CertificateCatalog = Record<CertificateType, Record<string, SelectionOption[]>>;

const CERTIFICATE_ORDER: CertificateType[] = [
  "PESSOA JURÍDICA | e-CNPJ",
  "PESSOA FÍSICA | e-CPF",
  "PESSOA JURÍDICA INAPTA | e-PJ",
  "ADVOGADOS | OAB",
  "NUVEM | SafeID",
  "NOTAS FISCAIS | NF-e",
];

const FALLBACK_LINK = "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce";

const CERTIFICATE_DATA: CertificateCatalog = {
  "PESSOA JURÍDICA | e-CNPJ": {
    A1: [
      {
        label: "1 ano",
        price: "R$ 240,00",
        link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/d61fa9c3-ad5f-41f9-b058-6743d2d182ad",
      },
    ],
    A3: [
      {
        label: "1 ano",
        price: "R$ 240,00",
        link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/edf06469-8da5-4b60-a492-aea7a4325ac3",
      },
      {
        label: "2 anos",
        price: "R$ 269,90",
        link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/1e86c3b4-2e81-4a42-86b8-36e6b46d5b3f",
      },
      {
        label: "3 anos",
        price: "Não Disponível!",
        link: "",
      },
    ],
  },
  "PESSOA FÍSICA | e-CPF": {
    A1: [
      {
        label: "1 ano",
        price: "R$ 150,00",
        link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/cb61f5c6-2749-4e78-9aa8-118618c46840",
      },
    ],
    A3: [
      {
        label: "1 ano",
        price: "R$ 170,00",
        link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/558e2d16-2124-4f44-af8e-f20d43739d48",
      },
      {
        label: "2 anos",
        price: "R$ 199,00",
        link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/69ecf8b1-45ba-4a2c-a0e0-7bbb3e68372d",
      },
      {
        label: "3 anos",
        price: "Não Disponível!",
        link: "",
      },
    ],
  },
  "PESSOA JURÍDICA INAPTA | e-PJ": {
    A1: [
      {
        label: "1 ano",
        price: "R$ 250,00",
        link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/e51aa6ce-4e11-44e7-a4ee-c472a68cebaf",
      },
    ],
  },
  "NUVEM | SafeID": {
    CPF: [
      {
        label: "Nuvem CPF - 4 meses",
        price: "R$ 70,00",
        link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/0ac21f33-634f-454c-b801-5da206654f7f",
      },
      {
        label: "Nuvem CPF - 1 ano",
        price: "R$ 170,00",
        link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/573e9949-1ab4-474b-b8c4-d6237160eea8",
      },
      {
        label: "Nuvem CPF - 2 anos",
        price: "R$ 220,00",
        link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/7545a6b6-7e18-4ac4-be22-b0fd5ce97af2",
      },
      {
        label: "Nuvem CPF - 3 anos",
        price: "Não Disponível!",
        link: "",
      },
    ],
    CNPJ: [{ 
      label: "Nuvem CNPJ - 1 ano",
      price: "R$ 240,00",
      link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/aa9d127d-7bf8-4fbc-8944-bf205c162652",
     }],
  },
  "ADVOGADOS | OAB": {
    A3: [
      {
        label: "1 ano",
        price: "R$ 89,90",
        link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/8da4e6de-fd3a-46a0-8746-cd5c0efd818d",
      },
      {
        label: "2 anos",
        price: "R$ 109,90",
        link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/ba174492-a4e0-447f-b617-1dc3bd3a5db2",
      },
      {
        label: "3 anos",
        price: "Não Disponível!",
        link: "",
      },
    ],
  },
  "NOTAS FISCAIS | NF-e": {
    A1: [
      {
        label: "1 ano",
        price: "R$ 240,00",
        link: "https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce/produto/eb1246d2-45a2-4eaf-bea7-e9ee9d7b3535",
      },
    ],
  },
};

function SelectColumn({
  title,
  options,
  selected,
  disabled,
  onSelect,
  renderLabel,
}: {
  title: string;
  options: string[];
  selected: string;
  disabled?: boolean;
  onSelect: (value: string) => void;
  renderLabel?: (value: string) => string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-base font-semibold text-gray-900">{title}</p>
      <div className="space-y-2">
        {options.map((option) => {
          const isChecked = selected === option;
          return (
            <label
              key={option}
              className={`flex items-center gap-3 rounded-lg border p-3 transition ${
                disabled
                  ? "cursor-not-allowed border-gray-200 bg-gray-50 text-gray-400"
                  : isChecked
                    ? "border-primary bg-primary/5"
                    : "cursor-pointer border-gray-200 hover:border-primary/60"
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                disabled={disabled}
                onChange={() => onSelect(option)}
                className="h-4 w-4 accent-blue-600"
              />
              <span className="text-sm font-medium">
                {renderLabel ? renderLabel(option) : option}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default function Certificados() {
  const [certificateType, setCertificateType] = useState<CertificateType | "">("");
  const [model, setModel] = useState("");
  const [validity, setValidity] = useState("");
  const [cep, setCep] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [needReader, setNeedReader] = useState("");

  const modelOptions = useMemo(() => {
    if (!certificateType) return [];
    return Object.keys(CERTIFICATE_DATA[certificateType]);
  }, [certificateType]);

  const validityOptions = useMemo(() => {
    if (!certificateType || !model) return [];
    return CERTIFICATE_DATA[certificateType][model]?.map((item) => item.label) ?? [];
  }, [certificateType, model]);

  const selectedOffer = useMemo(() => {
    if (!certificateType || !model || !validity) return null;
    const options = CERTIFICATE_DATA[certificateType][model] ?? [];
    return options.find((item) => item.label === validity) ?? null;
  }, [certificateType, model, validity]);

  const actionLink = selectedOffer?.link ?? FALLBACK_LINK;

  return (
    <div className="min-h-screen">
      <section className="bg-background py-20">
        <div className="container mx-auto mb-8 mt-4 px-4 text-center">
          <h1 className="text-gradient mb-2 text-5xl font-bold md:text-6xl">Certificados Digitais</h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Selecione o certificado por etapa: tipo, modelo e validade.
          </p>
        </div>

        <div className="container mx-auto px-4">
          <Card className="rounded-2xl border shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Escolha seu Certificado Digital</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-4">
                <SelectColumn
                  title="1. Tipo do certificado"
                  options={CERTIFICATE_ORDER}
                  selected={certificateType}
                  onSelect={(value) => {
                    setCertificateType(value as CertificateType);
                    setModel("");
                    setValidity("");
                  }}
                />

                <SelectColumn
                  title="2. Modelo"
                  options={modelOptions}
                  selected={model}
                  disabled={!certificateType}
                  renderLabel={(value) => {
                    if (value === "A1") return "A1 | ARQUIVO";
                    if (value === "A3") return "A3 | MÍDIA";
                    return value;
                  }}
                  onSelect={(value) => {
                    setModel(value);
                    setValidity("");
                  }}
                />

                <SelectColumn
                  title="3. Validade"
                  options={validityOptions}
                  selected={validity}
                  disabled={!model}
                  onSelect={setValidity}
                />

                <div className="space-y-3">
                  <p className="text-base font-semibold text-gray-900">4. Valor</p>
                  <div className="space-y-3 rounded-lg border border-gray-200 p-4">
                    <p className="text-sm text-gray-600">Valor do certificado selecionado</p>
                    <p className="text-primary text-3xl font-bold">
                      {validity ? selectedOffer?.price ?? "Não Disponível!" : "--"}
                    </p>

                    {validity ? (
                      <Link href={actionLink} target="_blank">
                        <Button className="bg-primary hover:bg-primary-hover w-full">
                          Solicitar Agora
                        </Button>
                      </Link>
                    ) : (
                      <Button className="w-full" disabled>
                        Solicitar Agora
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-4xl px-6">
        <div className="mb-10 flex flex-col gap-10 rounded-3xl border bg-white p-10">
          <div>
            <h2 className="mb-3 text-3xl font-bold text-gray-900">Precisa de Mídia?</h2>
            <p className="text-lg text-gray-600">Informe os dados abaixo para cotação de envio da mídia.</p>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-lg font-semibold text-gray-800">CEP de Entrega</label>
            <input
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="00000-000"
              className="h-14 rounded-xl border border-gray-300 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {cep.length >= 8 && (
            <div className="flex flex-col gap-3">
              <label className="text-lg font-semibold text-gray-800">Tipo de Mídia</label>
              <select
                value={mediaType}
                onChange={(e) => {
                  setMediaType(e.target.value);
                  setNeedReader("");
                }}
                className="h-14 rounded-xl border border-gray-300 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Selecione</option>
                <option value="Cartao">Cartão</option>
                <option value="Token">Token</option>
              </select>
            </div>
          )}

          {mediaType === "Cartao" && (
            <div className="flex flex-col gap-3">
              <label className="text-lg font-semibold text-gray-800">Necessita Leitora?</label>
              <select
                value={needReader}
                onChange={(e) => setNeedReader(e.target.value)}
                className="h-14 rounded-xl border border-gray-300 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Nao">Não</option>
              </select>
            </div>
          )}

          {cep && mediaType && (mediaType !== "Cartao" || needReader) && (
            <a
              href={`https://wa.me/5521970686270?text=${encodeURIComponent(
                `Ola! Gostaria de comprar uma midia do tipo ${mediaType} para entrega no CEP ${cep}.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary mt-6 flex h-16 items-center justify-center rounded-xl text-lg font-semibold text-white transition hover:bg-primary/80"
            >
              Solicitar Cotação WhatsApp
            </a>
          )}
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-4xl font-bold">O que é Certificado Digital?</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-muted-foreground mb-4">
                O Certificado Digital é uma identidade eletrônica que permite a identificação segura
                do autor de uma mensagem ou transação feita em meios eletrônicos, como a internet.
              </p>
              <p className="text-muted-foreground mb-4">
                Funciona como uma carteira de identidade virtual e garante autenticidade,
                confidencialidade, integridade e não repúdio nas operações realizadas no ambiente digital.
              </p>
              <p className="text-muted-foreground">
                E obrigatório para empresas que emitem notas fiscais eletrônicas e realizam
                transações que exigem validação jurídica digital.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
