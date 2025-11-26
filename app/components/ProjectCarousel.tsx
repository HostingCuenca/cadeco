"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const projectImages = [
  {
    src: "/adagiooo.jpg",
    alt: "Proyecto Adagio - Cadeco Global",
    title: "Proyecto Adagio"
  },
  {
    src: "/productos/morterosadhesivosyporcelax/Obra ADAGIO morteros adhesivos.jpg",
    alt: "Obra Adagio - Morteros Adhesivos",
    title: "Morteros Adhesivos"
  },
  {
    src: "/productos/morterosadhesivosyporcelax/Obra CIELO Porcelax.jpg",
    alt: "Obra Cielo - Porcelax",
    title: "Obra Cielo"
  },
  {
    src: "/productos/morterosadhesivosyporcelax/Obra El portal Cademix.jpg",
    alt: "Obra El Portal - Cademix",
    title: "Obra El Portal"
  },
  {
    src: "/productos/Empastes/obra empaste exterior.jpg",
    alt: "Obra Empaste Exterior",
    title: "Empaste Exterior"
  },
  {
    src: "/productos/Empastes/obra empaste interior.jpg",
    alt: "Obra Empaste Interior",
    title: "Empaste Interior"
  }
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="max-w-5xl mx-auto relative">
      {/* Carrusel */}
      <div className="relative h-[400px] md:h-[600px] overflow-hidden shadow-2xl">
        {projectImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 z-10'
                : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay con título */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-2xl font-light">{image.title}</h3>
            </div>
          </div>
        ))}

        {/* Botones de navegación */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-cadeco-dark p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Anterior"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-cadeco-dark p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Siguiente"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicadores (dots) */}
      <div className="flex justify-center gap-2 mt-6">
        {projectImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-3 bg-cadeco-orange'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
