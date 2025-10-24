"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background shadow-[0_2px_10px_hsl(0_0%_0%/0.05)]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
              TH
            </div>
            <span className={`font-bold text-lg ${scrolled ? "text-foreground" : "text-white"}`}>
              TH Tecnologia.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce" target="_blank">
              <Button
                variant="ghost"
                className={scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary hover:bg-white/10"}
              >
                Certificado Digital
              </Button>
            </Link>

            <Link href="/planos" target="_blank">
              <Button
                variant="ghost"
                className={scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary hover:bg-white/10"}
              >
                Planos e Seguros
              </Button>
            </Link>

            <Link href="https://parceiro.gestaoar.shop/thtecnologia/th-ecommerce" target="_blank">
              <Button
                variant="ghost"
                className={scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary hover:bg-white/10"}
              >
                Renovação
              </Button>
            </Link>

            <Link href="/#sobre">
              <Button
                variant="ghost"
                className={scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary hover:bg-white/10"}
              >
                A Empresa
              </Button>
            </Link>

            {/* Repositório Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary hover:bg-white/10"}
                >
                  Repositório <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
              <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="https://thtecnologia.com.br/dou.pdf" target="_blank">
                    Diário Oficial
                  </Link>
                </DropdownMenuItem> 
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="https://thtecnologia.com.br/cd.pdf" target="_blank">
                    Declaração de Práticas CD
                  </Link>
                </DropdownMenuItem> 
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="https://thtecnologia.com.br/rfb.pdf" target="_blank">
                    Declaração de Práticas RFB
                  </Link>
                </DropdownMenuItem> 
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Suporte Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary hover:bg-white/10"}
                >
                  Suporte <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="https://safeweb.com.br/suporte/instalacao" target="_blank">
                    Instalar Certificado
                  </Link>
                </DropdownMenuItem> 
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="https://safeweb.com.br/suporte/centraldedownloads" target="_blank">
                    Download Drivers
                  </Link>
                </DropdownMenuItem> 
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0" target="_blank">
                    Dúvidas Gerais
                  </Link>
                </DropdownMenuItem> 
                
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 bg-background rounded-lg mt-2 shadow-lg">
            <Link href="/certificados" className="block px-4 py-2 hover:bg-accent">
              Certificado Digital
            </Link>
            <Link href="/planos" className="block px-4 py-2 hover:bg-accent">
              Planos e Seguros
            </Link>
            <Link href="/certificados#renovacao" className="block px-4 py-2 hover:bg-accent">
              Renovação
            </Link>
            <Link href="/#sobre" className="block px-4 py-2 hover:bg-accent">
              A Empresa
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
