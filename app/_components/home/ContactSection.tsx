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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                <a href="mailto:contato@thtecnologia.com.br" className="text-muted-foreground hover:text-primary transition-colors">
                  contato@thtecnologia.com.br
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  (11) 99999-9999
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Instagram className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                <a href="https://instagram.com/th_tecnologia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  @th_tecnologia
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.097193682895!2d-46.65424668502207!3d-23.561414684682324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1635180000000!5m2!1spt-BR!2sbr"
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
