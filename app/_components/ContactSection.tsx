import { Mail, Phone, Instagram } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contato" className="bg-accent py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Entre em Contato Conosco
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos prontos para atender você. Escolha o canal que preferir!
          </p>
        </div>

        <div className="flex-column mx-auto flex max-w-6xl flex-wrap items-center justify-center sm:items-center sm:justify-between">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                <Mail className="text-primary-foreground h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">E-mail</h3>
                <a
                  href="mailto:administrativo@thtecnologia.com.br"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  administrativo@thtecnologia.com.br
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                <Phone className="text-primary-foreground h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">WhatsApp</h3>
                <a
                  href="https://wa.me/5521970686270"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (21) 97068-6270
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                <Instagram className="text-primary-foreground h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Instagram</h3>
                <a
                  href="https://www.instagram.com/thcertificadora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @thcertificadora
                </a>
              </div>
            </div>
            <div className="mb-4 gap-5 text-xl font-semibold">
              {/* <h3 className="flex justify-center mb-3">Parceiros</h3> */}
              <div className="mt-15 flex flex-col justify-center gap-2">
                <div className="flex flex-row gap-2">
                  <Image
                    src="/safeweb1.png"
                    alt="Safeweb"
                    width={150}
                    height={60}
                  />

                  <Image src="/gestao.png" alt="ITI" width={150} height={60} />
                </div>

                <div className="flex gap-2">
                  <Image src="/safe.png" alt="ITI" width={150} height={60} />

                  <Image
                    src="/logo_iti.png"
                    alt="ITI"
                    width={150}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] w-[500px] overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.8782018802162!2d-43.32657618803515!3d-22.880957279186887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997d2ead285c11%3A0x6534e3a2217a6a0!2sR.%20Cerqueira%20Daltro%2C%20157%20-%20Cascadura%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021380-320!5e0!3m2!1spt-BR!2sbr!4v1761322657203!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização TH Tecnologia"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
