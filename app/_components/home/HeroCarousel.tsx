"use client"
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/app/_components/ui/button";

const slides = [
  {
    id: 1,
    title: "O que é um Certificado Digital?",
    description: "Garanta a segurança e a validade jurídica de suas transações online.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    title: "Cuidamos da sua saúde e da sua família",
    description: "Conheça nossos planos de saúde com as melhores condições.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    title: "Trabalhamos com as maiores seguradoras",
    description: "Encontre o plano ideal para você com nossos parceiros confiáveis.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
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
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
