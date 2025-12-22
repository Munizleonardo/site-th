import Header from "@/app/_components/Header";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Heart, Car, Briefcase, Home } from "lucide-react";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const plans = [
  {
    id: 1,
    icon: Heart,
    company: "Plano de Saúde",
    price: "Informações",
    description:
      "Plano completo para você que busca qualidade e segurança na saúde. Rede credenciada ampla e atendimento premium.",
    link: "/forms/formularioHealthPlan",
  },
  {
    id: 2,
    icon: Car,
    company: "Seguro Auto",
    price: "Consulte condições",
    description:
      "Proteja seu carro ou sua moto e tenha segurança para viajar com sua família. Cobertura nacional para se locomover com segurança.",
    link: "/forms/formularioSecurityCar",
  },
];

export default function Planos() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="from-accent to-background bg-gradient-to-br pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-gradient mb-6 text-5xl font-bold md:text-6xl">
            Planos de Saúde e Seguros
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Garantir segurança e estabilidade é essencial para quem busca
            tranquilidade e planejamento a longo prazo. Nossos planos de saúde e
            seguros foram desenvolvidos para oferecer proteção completa, com
            soluções personalizadas que atendem às necessidades de pessoas,
            famílias e empresas.
          </p>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Com respaldo de instituições sólidas e atendimento de excelência,
            proporcionamos a confiança necessária para enfrentar imprevistos e
            manter o equilíbrio financeiro e emocional em qualquer
            circunstância.
          </p>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Invista em segurança, bem-estar e tranquilidade. Escolha um plano
            que acompanha você em todas as etapas da vida.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="bg-background md:flex:row flex flex-col items-center justify-between py-1 text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Solicite Cotação
          </h2>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row lg:flex-row">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={plan.id}
                  className="card-hover flex justify-between gap-3 border-2"
                >
                  <CardHeader>
                    <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-lg">
                      <Icon className="text-primary flex h-8 w-8 items-center justify-center" />
                    </div>
                    <CardTitle className="text-3xl">{plan.company}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <p className="text-base">{plan.description}</p>
                    </ul>
                  </CardContent>
                  <div className="aling-center flex justify-center">
                    <Link href={plan.link} target="_blank">
                      <Button
                        variant="outline"
                        className="bg-primary hover:bg-primary-hover text-primary-foreground w-full"
                      >
                        Solicitar Cotação
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operators Section */}
      <section className="py-5">
        {/* Sem título */}
        <p className="mt-5 mb-2 text-center text-4xl font-bold">
          Operadoras Parceiras
        </p>
        <div className="flex max-w-[100%] flex-wrap items-center justify-center sm:max-w-[100%] sm:flex-row">
          <Image src="/amil.png" alt="Amil" width={100} height={100} />

          <Image src="/bradesco.png" alt="Bradesco" width={100} height={100} />

          <Image src="/porto.png" alt="Porto Seguro" width={100} height={100} />

          <Image src="/assim.png" alt="Assim Saúde" width={100} height={100} />

          <Image
            src="/sulamerica.png"
            alt="SulAmérica"
            width={100}
            height={100}
          />

          <Image src="/unimed.png" alt="Unimed" width={100} height={100} />

          <Image
            src="/levesaude.png"
            alt="Leve Saude"
            width={100}
            height={100}
          />

          <Image src="/amep.png" alt="Amep" width={100} height={100} />

          <Image src="/klini.png" alt="Klini" width={100} height={100} />

          <Image
            src="/notredame.png"
            alt="Notredame"
            width={100}
            height={100}
          />

          <Image src="/azul.png" alt="Azul Seguros" width={100} height={100} />

          <Image src="/itau.png" alt="Itau Seguros" width={100} height={100} />

          <Image src="/suhai.png" alt="Suhai" width={100} height={100} />

          <Image
            src="/tokyo.png"
            alt="Tokyo Seguros"
            width={100}
            height={100}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Ficou com Dúvida?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            Entre em contato conosco! Nossa equipe especializada vai encontrar o
            plano perfeito para suas necessidades e orçamento.
          </p>
          <Link
            href="https://api.whatsapp.com/send/?phone=5521970686270&text&app_absent=0"
            target="_blank"
          >
            <Button className="text-primary bg-white px-8 py-6 text-lg outline hover:bg-white/90">
              Falar com Especialista
            </Button>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-4xl font-bold">
              Por que escolher a TH Tecnologia?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <Check className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Atendimento Personalizado
                  </h3>
                  <p className="text-muted-foreground">
                    Cada cliente é único. Analisamos seu perfil para indicar o
                    melhor plano.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <Check className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Melhores Condições
                  </h3>
                  <p className="text-muted-foreground">
                    Negociamos diretamente com as seguradoras para você ter o
                    melhor preço.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <Check className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Suporte Contínuo
                  </h3>
                  <p className="text-muted-foreground">
                    Nossa equipe está sempre disponível para ajudar no que
                    precisar.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <Check className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Parceiros Confiáveis
                  </h3>
                  <p className="text-muted-foreground">
                    Trabalhamos apenas com as maiores e mais respeitadas
                    seguradoras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
