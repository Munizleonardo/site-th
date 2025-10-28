"use client"
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slidesPlans = [
    {
      id: 1,
      title: "Plano de Saúde",
      description: "Melhores operadoras para assegurar você e sua família. Cobertura nacional para uma maior tranquilidade.",
      image: "/Plano_de_Saúde.jpg",
    },
    {
      id: 2,
      title: "Seguro Auto",
      description: "Locomova-se com tranquilidade, sabendo que está assegurado das melhores seguradoras do Brasil.",
      image: "/Seguro_de_Carro.jpg",
    },
    {
      id: 3,
      title: "Seguro Empresarial",
      description: "Soluções personalizadas para sua empresa. Cuide da saúde dos seus colaboradores com economia.",
      image: "/Seguro_Empresarial.jpg",
    },
  ];

export default function HealthPlans() {
  const [currentSlide, setCurrentSlidePlans] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlidePlans((prev) => (prev + 1) % slidesPlans.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlidePlans((prev) => (prev + 1) % slidesPlans.length);
  };

  const prevSlide = () => {
    setCurrentSlidePlans((prev) => (prev - 1 + slidesPlans.length) % slidesPlans.length);
  };

  return (
    <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {slidesPlans.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {slide.description}
              </p>
              
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slidesPlans.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlidePlans(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
