"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      image: "https://static.wixstatic.com/media/ff6f26_dbbab5f6ee0d494ba7e0e1c0492224a6~mv2.jpg/v1/fit/w_900,h_422,q_90,enc_avif,quality_auto/ff6f26_dbbab5f6ee0d494ba7e0e1c0492224a6~mv2.jpg",
      alt: "Proyecto 1"
    },
    {
      id: 2,
      image: "https://static.wixstatic.com/media/ff6f26_4754089c62c04445a9059f59a6c9a9bc~mv2.jpg/v1/fit/w_1740,h_422,q_90,enc_avif,quality_auto/ff6f26_4754089c62c04445a9059f59a6c9a9bc~mv2.jpg",
      alt: "Proyecto 2"
    },
    {
      id: 3,
      image: "https://static.wixstatic.com/media/ff6f26_94ea3d58e217476d91951e41d8412088~mv2.jpg/v1/fit/w_900,h_422,q_90,enc_avif,quality_auto/ff6f26_94ea3d58e217476d91951e41d8412088~mv2.jpg",
      alt: "Proyecto 3"
    },
   

    {
      id: 7,
      image: "/proyectos/1.jpeg",
      alt: "Proyecto 7"
    },
    {
      id: 8,
      image: "/proyectos/2.jpeg",
      alt: "Proyecto 8"
    },
    {
      id: 9,
      image: "/proyectos/3.jpeg",
      alt: "Proyecto 9"
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Función para obtener los 3 proyectos visibles
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Galería - Muestra 3 imágenes */}
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getVisibleProjects().map((project) => (
            <div key={project.id} className="relative h-64 md:h-80 overflow-hidden shadow-lg">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <button
        onClick={handlePrevious}
        className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 p-3 bg-white text-cadeco-dark hover:bg-cadeco-orange hover:text-white transition-colors shadow-lg"
        style={{ backgroundColor: 'white' }}
        aria-label="Proyecto anterior"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 p-3 bg-white text-cadeco-dark hover:bg-cadeco-orange hover:text-white transition-colors shadow-lg"
        style={{ backgroundColor: 'white' }}
        aria-label="Proyecto siguiente"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Indicadores de posición */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all ${
              index === currentIndex
                ? "w-8 bg-cadeco-orange"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir al proyecto ${index + 1}`}
            style={index === currentIndex ? { backgroundColor: 'rgb(213, 52, 3)' } : {}}
          />
        ))}
      </div>
    </div>
  );
}
