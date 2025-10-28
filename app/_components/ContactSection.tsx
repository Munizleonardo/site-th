import { Mail, Phone, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato Conosco
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você. Escolha o canal que preferir!
          </p>
        </div>

        <div className="flex flex-column max-w-6xl mx-auto justify-between items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                <a href="mailto:administrativo@thtecnologia.com.br" className="text-muted-foreground hover:text-primary transition-colors">
                  administrativo@thtecnologia.com.br
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <a href="https://wa.me/5521970686270" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  (21) 97068-6270
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Instagram className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                <a href="https://www.instagram.com/thcertificadora/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  @thcertificadora
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg w-[500px] h-[400px]">
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
};
