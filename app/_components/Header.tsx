"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";

interface HeaderProps {
  forceVisible?: boolean;
}

export default function Header({ forceVisible = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const forceSolidByRoute =
    /^\/forms(?:\/|$)/.test(pathname) ||
    /^\/certificados(?:\/|$)/.test(pathname) ||
    /^\/certificados\/(cpf|cnpj|nuvem)(?:\/|$)/.test(pathname);
  const solidHeader = forceVisible || forceSolidByRoute || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        solidHeader
          ? "bg-background shadow-[0_2px_10px_hsl(0_0%_0%/0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-primary-foreground flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold">
              <Image src="/favicon.png" alt="Logo" width={100} height={100} />
            </div>
            <span
              className={`text-lg font-bold ${solidHeader ? "text-foreground" : "text-white"}`}
            >
              TH TECNOLOGIA E<br /> CONSULTORIA
            </span>
          </Link>
          <nav className="hidden items-center space-x-1 lg:flex">
            <Link href="/certificados">
              <Button
                variant="ghost"
                className={
                  solidHeader
                    ? "text-foreground hover:text-primary"
                    : "hover:text-primary text-white hover:bg-white/10"
                }
              >
                Comprar Certificado Digital
              </Button>
            </Link>

            <Link href="/healthplans">
              <Button
                variant="ghost"
                className={
                  solidHeader
                    ? "text-foreground hover:text-primary"
                    : "hover:text-primary text-white hover:bg-white/10"
                }
              >
                Planos e Seguros
              </Button>
            </Link>

            <Link
              href="https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce"
              target="_blank"
            >
              <Button
                variant="ghost"
                className={
                  solidHeader
                    ? "text-foreground hover:text-primary"
                    : "hover:text-primary text-white hover:bg-white/10"
                }
              >
                Renovação
              </Button>
            </Link>

            <Link href="/#sobre">
              <Button
                variant="ghost"
                className={
                  solidHeader
                    ? "text-foreground hover:text-primary"
                    : "hover:text-primary text-white hover:bg-white/10"
                }
              >
                A Empresa
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={
                    solidHeader
                      ? "text-foreground hover:text-primary"
                      : "hover:text-primary text-white hover:bg-white/10"
                  }
                >
                  Repositório <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/DOU.pdf" target="_blank">
                    Diário Oficial
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/Declaração Práticas CD.pdf" target="_blank">
                    Declaração de Práticas CD
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/Declaração Práticas RFB.pdf" target="_blank">
                    Declaração de Práticas RFB
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={
                    solidHeader
                      ? "text-foreground hover:text-primary"
                      : "hover:text-primary text-white hover:bg-white/10"
                  }
                >
                  Suporte <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link
                    href="https://safeweb.com.br/suporte/instalacao"
                    target="_blank"
                  >
                    Instalar Certificado
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link
                    href="https://safeweb.com.br/suporte/centraldedownloads"
                    target="_blank"
                  >
                    Download Drivers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link
                    href="https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0"
                    target="_blank"
                  >
                    Dúvidas Gerais
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <button
            className={`lg:hidden ${solidHeader ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="bg-background mt-3 overflow-hidden rounded-2xl shadow-xl lg:hidden">
            <nav className="divide-border flex flex-col divide-y">
              <Link
                href="/certificados"
                className="hover:bg-accent px-6 py-4 text-lg font-medium transition"
              >
                Comprar Certificado Digital
              </Link>

              <Link
                href="/healthplans"
                className="hover:bg-accent px-6 py-4 text-lg font-medium transition"
              >
                Planos e Seguros
              </Link>

              <Link
                href="https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce"
                className="hover:bg-accent px-6 py-4 text-lg font-medium transition"
              >
                Renovação
              </Link>

              <Link
                href="/#sobre"
                className="hover:bg-accent px-6 py-4 text-lg font-medium transition"
              >
                A Empresa
              </Link>
            </nav>

            <div className="flex flex-col gap-4 px-4 py-5">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="bg-accent hover:bg-accent/80 flex h-14 w-full items-center justify-between rounded-xl px-5 text-lg font-semibold transition">
                    Repositório
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="start"
                  className="w-[calc(100vw-2rem)] rounded-xl shadow-lg"
                >
                  <DropdownMenuItem asChild>
                    <Link
                      href="https://thtecnologia.com.br/dou.pdf"
                      target="_blank"
                      className="px-4 py-3 text-base"
                    >
                      Diário Oficial
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="https://thtecnologia.com.br/cd.pdf"
                      target="_blank"
                      className="px-4 py-3 text-base"
                    >
                      Declaração de Práticas CD
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="https://thtecnologia.com.br/rfb.pdf"
                      target="_blank"
                      className="px-4 py-3 text-base"
                    >
                      Declaração de Práticas RFB
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="bg-accent hover:bg-accent/80 flex h-14 w-full items-center justify-between rounded-xl px-5 text-lg font-semibold transition">
                    Suporte
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="start"
                  className="w-[calc(100vw-2rem)] rounded-xl shadow-lg"
                >
                  <DropdownMenuItem asChild>
                    <Link
                      href="https://safeweb.com.br/suporte/instalacao"
                      target="_blank"
                      className="px-4 py-3 text-base"
                    >
                      Instalar Certificado
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="https://safeweb.com.br/suporte/centraldedownloads"
                      target="_blank"
                      className="px-4 py-3 text-base"
                    >
                      Download de Drivers
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0"
                      target="_blank"
                      className="px-4 py-3 text-base"
                    >
                      Dúvidas Gerais
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
