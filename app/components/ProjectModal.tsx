"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    name: string;
    image: string;
    description: string;
  } | null;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ProjectModal({ isOpen, onClose, project, onNext, onPrevious }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      {/* Botón Anterior */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-4 z-10 p-3 bg-white text-cadeco-dark hover:bg-cadeco-orange hover:text-white transition-colors"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <div
        className="relative max-w-5xl w-full bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white text-cadeco-dark hover:bg-cadeco-orange hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Imagen */}
        <div className="relative w-full h-[60vh]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Descripción */}
        <div className="p-8">
          <h3 className="text-3xl font-light text-cadeco-dark mb-4">
            {project.name}
          </h3>
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Botón Siguiente */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 z-10 p-3 bg-white text-cadeco-dark hover:bg-cadeco-orange hover:text-white transition-colors"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}
