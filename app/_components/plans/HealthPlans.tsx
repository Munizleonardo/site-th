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
    <div className="relative h-[380px] overflow-hidden sm:h-[420px] lg:h-[350px]">
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
          <div className="relative flex h-full items-center justify-center px-4 pt-24 pb-16 text-center sm:pt-28 lg:pt-0 lg:pb-0">
            <div className="animate-fade-in max-w-4xl">
              <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl lg:mb-6 lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mb-6 text-lg text-white/90 md:text-2xl lg:mb-8">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30 sm:left-4 sm:p-3"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30 sm:right-4 sm:p-3"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 space-x-2 sm:bottom-8">
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
