"use client";
import { useState } from "react";
import { Input } from "@/app/_components/ui/input"
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";


export default function PlanodeSaude() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    cpfCnpj: "",
    cidade: "",
    bairro: "",
    qtdVidas: "",
    idades: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Enviado! Entraremos em contato.");
        setFormData({
          nome: "",
          telefone: "",
          cpfCnpj: "",
          cidade: "",
          bairro: "",
          qtdVidas: "",
          idades: "",
        });
      } else {
        alert("Erro ao enviar: " + data.message);
      }
    } catch (error) {
      alert("Ocorreu um erro ao enviar o formulário.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (

      <main className=" bg-gray-50 flex flex-col items-center py-30">
        <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold text-center text-primary mb-6">
            Solicitação de Cotação de Plano de Saúde
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            
            <div className="flex flex-col">
              <Label className="font-semibold text-gray-700">Nome</Label>
              <Input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            
            <div className="flex flex-col">
              <Label className="font-semibold text-gray-700">Telefone</Label>
              <Input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                placeholder="(00) 00000-0000"
                className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            
            <div className="flex flex-col">
              <Label className="font-semibold text-gray-700">CPF/CNPJ</Label>
              <Input
                type="text"
                name="cpfCnpj"
                value={formData.cpfCnpj}
                onChange={handleChange}
                required
                placeholder="000.000.000-00"
                className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            
            <div className="flex flex-col">
              <Label className="font-semibold text-gray-700">Cidade</Label>
              <Input
                type="text"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            
            <div className="flex flex-col">
              <Label className="font-semibold text-gray-700">Bairro</Label>
              <Input
                type="text"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            
            <div className="flex flex-col">
              <Label className="font-semibold text-gray-700">
                Número de Dependentes
              </Label>
              <Input
                type="number"
                name="qtdVidas"
                value={formData.qtdVidas}
                onChange={handleChange}
                required
                min={1}
                className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            
            <div className="flex flex-col md:col-span-2">
              <Label className="font-semibold text-gray-700">
                Idades das Vidas
              </Label>
              <Textarea
                name="idades"
                value={formData.idades}
                onChange={handleChange}
                required
                placeholder="Ex: 25, 32, 40..."
                className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 h-24 resize-none"
              ></Textarea>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <Button
                type="submit"
                className="bg-primary hover:bg-primary text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 cursor-pointer w-[100%]"
              >
                {isLoading ? "Enviando..." : "Enviar Dados"}
              </Button>
            </div>
          </form>
        </div>
      </main>

  );
}