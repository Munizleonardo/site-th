"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slidesPlans = [
  {
    id: 1,
    title: "Plano de Saúde",
    description:
      "Melhores operadoras para assegurar você e sua família. Cobertura nacional para uma maior tranquilidade.",
    image: "/Plano_de_Saúde.jpg",
  },
  {
    id: 2,
    title: "Seguro Auto",
    description:
      "Locomova-se com tranquilidade, sabendo que está assegurado das melhores seguradoras do Brasil.",
    image: "/Seguro_de_Carro.jpg",
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
    setCurrentSlidePlans(
      (prev) => (prev - 1 + slidesPlans.length) % slidesPlans.length,
    );
  };

  return (
    <div className="relative h-[600px] overflow-hidden lg:h-[700px]">
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
          <div className="relative flex h-full items-center justify-center px-4 text-center">
            <div className="animate-fade-in max-w-4xl">
              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mb-8 text-xl text-white/90 md:text-2xl">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {slidesPlans.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlidePlans(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
