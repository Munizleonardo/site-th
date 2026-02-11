"use client";

import { useEffect, useMemo, useState } from "react";

import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { Label } from "@/app/_components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";

type CertPageKind = "cpf" | "cnpj" | "nuvem";

const cpfCnpjModels = ["A1", "A3"] as const;
const cpfCnpjPeriods = ["1 ano", "2 anos", "3 anos"] as const;
const cloudCpfPeriods = ["4 meses", "1 ano", "3 anos"] as const;
const cloudCnpjPeriods = ["1 ano"] as const;

type Offer = { price: string; href: string };

type CertificateChoiceBoxProps = {
  kind: CertPageKind;
  offers?: Record<string, Offer>;
};

function normalizeHref(href: string) {
  const trimmed = href.trim();
  if (!trimmed) return "";
  if (/^\//.test(trimmed)) return trimmed;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (/^www\./i.test(trimmed)) return `https://${trimmed}`;
  if (/^[a-z0-9.-]+\.[a-z]{2,}(\/|$)/i.test(trimmed))
    return `https://${trimmed}`;
  return trimmed;
}

function isValidHref(href: string) {
  const normalized = normalizeHref(href);
  return normalized.startsWith("/") || /^https?:\/\//i.test(normalized);
}

export default function CertificateChoiceBox({
  kind,
  offers,
}: CertificateChoiceBoxProps) {
  const isCloud = kind === "nuvem";
  const fixedDocType = kind === "cpf" ? "CPF" : kind === "cnpj" ? "CNPJ" : null;

  const [cpfCnpjModel, setCpfCnpjModel] = useState<string>(cpfCnpjModels[0]);
  const [cpfCnpjPeriod, setCpfCnpjPeriod] = useState<string>(cpfCnpjPeriods[0]);

  useEffect(() => {
    if (cpfCnpjModel === "A3") setCpfCnpjPeriod(cpfCnpjPeriods[0]);
  }, [cpfCnpjModel]);

  const [cloudDocType, setCloudDocType] = useState<string>("CPF");
  const cloudPeriodOptions = useMemo(() => {
    return cloudDocType === "CPF" ? cloudCpfPeriods : cloudCnpjPeriods;
  }, [cloudDocType]);
  const [cloudPeriod, setCloudPeriod] = useState<string>(cloudPeriodOptions[0]);

  useEffect(() => {
    setCloudPeriod(cloudPeriodOptions[0]);
  }, [cloudPeriodOptions]);

  const selectionKey = useMemo(() => {
    if (isCloud) return `${cloudDocType}|${cloudPeriod}`;

    if (cpfCnpjModel === "A1") return `${fixedDocType}|A1`;
    return `${fixedDocType}|A3|${cpfCnpjPeriod}`;
  }, [
    cloudDocType,
    cloudPeriod,
    cpfCnpjModel,
    cpfCnpjPeriod,
    fixedDocType,
    isCloud,
  ]);

  const offer = offers?.[selectionKey];
  const offerHref = offer?.href ? normalizeHref(offer.href) : "";
  const offerPrice = offer?.price?.trim() ?? "";

  const leftTitle =
    kind === "cpf"
      ? "Certificados - Pessoa Física"
      : kind === "cnpj"
        ? "Certificados - Pessoa Jurídica"
        : "Certificados - Nuvem (SafeID)";

  const leftDescription =
    kind === "cpf"
      ? "Escolha o modelo e o período do seu certificado digital para CPF."
      : kind === "cnpj"
        ? "Escolha o modelo e o período do seu certificado digital para CNPJ."
        : "Selecione CPF ou CNPJ e o período do certificado em nuvem (SafeID).";

  return (
    <Card className="w-full max-w-5xl rounded-2xl border bg-white shadow-sm">
      <div className="grid md:grid-cols-2">
        <div className="p-6 md:p-10">
          <h2 className="text-2xl font-bold md:text-3xl">{leftTitle}</h2>
          <p className="text-muted-foreground mt-3 text-base leading-relaxed">
            {leftDescription}
          </p>

          <div className="mt-8 grid gap-4 text-sm">
            <div className="rounded-xl border bg-background p-4">
              <p className="font-semibold">O que você está escolhendo</p>
              <p className="text-muted-foreground mt-1">
                {isCloud
                  ? "Tipo (CPF/CNPJ) e período do certificado em nuvem."
                  : "Modelo e período do seu certificado digital."}
              </p>
            </div>
            <div className="rounded-xl border bg-background p-4">
              <p className="font-semibold">Dica</p>
              <p className="text-muted-foreground mt-1">
                Se tiver dúvidas, entre em contato conosco para recomendarmos a
                melhor opção.
              </p>
            </div>
            {!isCloud && (
              <div className="rounded-xl border bg-background p-4">
                <p className="font-semibold">Precisa de Mídia?</p>
                <p className="text-muted-foreground mt-1">
                  Informe abaixo o CEP de entrega e o tipo de mídia para cálculo
                  do valor.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="border-t p-6 md:border-t-0 md:border-l md:p-10">
          <h3 className="text-xl font-semibold">Escolha seu Certificado Digital</h3>
          <p className="text-muted-foreground mt-2 text-sm">
            Sua seleção já inicia preenchida de acordo com a página.
          </p>

          <div className="mt-8 grid gap-6">
            {!isCloud ? (
              <>
                <div className="grid gap-2">
                  <Label>Certificado</Label>
                  <div className="bg-accent text-foreground flex h-10 items-center rounded-md border px-3 text-sm">
                    {fixedDocType ?? ""}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label>Modelo</Label>
                  <Select value={cpfCnpjModel} onValueChange={setCpfCnpjModel}>
                    <SelectTrigger className="w-full transition-colors hover:border-primary hover:bg-primary/5">
                      <SelectValue placeholder="Selecione o modelo" />
                    </SelectTrigger>
                    <SelectContent>
                      {cpfCnpjModels.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {cpfCnpjModel === "A3" && (
                  <div className="grid gap-2">
                    <Label>Período</Label>
                    <Select
                      value={cpfCnpjPeriod}
                      onValueChange={setCpfCnpjPeriod}
                    >
                      <SelectTrigger className="w-full transition-colors hover:border-primary hover:bg-primary/5">
                        <SelectValue placeholder="Selecione o período" />
                      </SelectTrigger>
                      <SelectContent>
                        {cpfCnpjPeriods.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="grid gap-2">
                  <Label>Certificado</Label>
                  <Select value={cloudDocType} onValueChange={setCloudDocType}>
                    <SelectTrigger className="w-full transition-colors hover:border-primary hover:bg-primary/5">
                      <SelectValue placeholder="Selecione CPF ou CNPJ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CPF">CPF</SelectItem>
                      <SelectItem value="CNPJ">CNPJ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label>Período</Label>
                  <Select value={cloudPeriod} onValueChange={setCloudPeriod}>
                    <SelectTrigger className="w-full transition-colors hover:border-primary hover:bg-primary/5">
                      <SelectValue placeholder="Selecione o período" />
                    </SelectTrigger>
                    <SelectContent>
                      {cloudPeriodOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            <div>
              <div className="rounded-xl mb-4 border justify-between flex flex-row bg-background p-4">
                <p className="text-lg font-semibold">Valor:</p>
                <p className="text-primary/90 mt-1 flex  text-3xl font-bold">
                  {offerPrice
                    ? offerPrice
                    : cpfCnpjModel === "A1" && !isCloud
                      ? "Defina o valor do A1 para exibir aqui"
                      : ""}
                </p>
              </div>

              {offerHref && isValidHref(offerHref) ? (
                <a href={offerHref} target="_blank" rel="noreferrer">
                  <Button className="bg-primary hover:bg-primary-hover w-full">
                    Comprar
                  </Button>
                </a>
              ) : (
                <Button
                  className="bg-primary hover:bg-primary-hover w-full"
                  disabled
                >
                  Comprar
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

