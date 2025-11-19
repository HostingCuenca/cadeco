"use client";

import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import ProjectModal from "../components/ProjectModal";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { useState } from "react";

export default function NosotrosPage() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const proyectos = [
    {
      name: "Residencial Ángela",
      image: "https://static.wixstatic.com/media/c837a6_a7011d6f73244f3081dfbd0fa1aa0d48~mv2.jpg/v1/fill/w_560,h_420,q_90,enc_avif,quality_auto/c837a6_a7011d6f73244f3081dfbd0fa1aa0d48~mv2.jpg",
      description: "Proyecto residencial de alta calidad utilizando nuestros morteros adhesivos y recubrimientos especializados para garantizar durabilidad y acabados perfectos en cada detalle constructivo."
    },
    {
      name: "Carretera del Valle",
      image: "https://static.wixstatic.com/media/c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.jpg/v1/fill/w_560,h_420,q_90,enc_avif,quality_auto/c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.jpg",
      description: "Infraestructura vial donde aplicamos nuestros endurecedores de pisos de alto tráfico, asegurando resistencia y larga vida útil en condiciones extremas de uso."
    },
    {
      name: "Región industrial de Ancona",
      image: "https://static.wixstatic.com/media/c837a6_d2f843c8d478408d84b9c9b3e43fe514~mv2.jpg/v1/fill/w_560,h_420,q_90,enc_avif,quality_auto/c837a6_d2f843c8d478408d84b9c9b3e43fe514~mv2.jpg",
      description: "Complejo industrial equipado con nuestros aditivos especializados y morteros de alta resistencia, diseñados para soportar las exigencias de la industria moderna."
    },
    {
      name: "Puente del Lago Misión",
      image: "https://static.wixstatic.com/media/c837a6_ff17ef7473f04d19bbacf6161681a26c~mv2.jpg/v1/fill/w_560,h_420,q_90,enc_avif,quality_auto/c837a6_ff17ef7473f04d19bbacf6161681a26c~mv2.jpg",
      description: "Obra de ingeniería civil donde implementamos selladores y recubrimientos impermeabilizantes que protegen la estructura ante condiciones climáticas adversas."
    },
    {
      name: "Residencial Hacienda",
      image: "/trabajorealizado-vertical.jpg",
      description: "Desarrollo habitacional con aplicación de nuestros empastes de alta calidad y boquillas para juntas, logrando acabados impecables en cada unidad residencial."
    },
    {
      name: "Complejo de apartamentos Roma",
      image: "/el-portal-trabajorealizado.jpg",
      description: "Proyecto arquitectónico moderno con uso integral de nuestra línea de productos para construcción, desde cimentación hasta acabados finales."
    },
    {
      name: "Sede del Campus Norte",
      image: "/blanco2.jpg",
      description: "Instalación educativa construida con nuestros morteros adhesivos de última generación y sistemas de recubrimiento que garantizan espacios seguros y duraderos."
    },
    {
      name: "Intersección Este",
      image: "/casa.jpg",
      description: "Nodo vial urbano reforzado con nuestros endurecedores de concreto y selladores especializados para tráfico pesado continuo."
    },
    {
      name: "Colonia El Carmen",
      image: "/cademix-producto.jpg",
      description: "Urbanización residencial donde nuestros productos Cademix proporcionaron soluciones completas de construcción con estándares internacionales de calidad."
    },
    {
      name: "Nuevo campus de Colinas",
      image: "/adagiooo.jpg",
      description: "Centro educativo de vanguardia con aplicaciones técnicas de nuestros aditivos Adagio, optimizando tiempos de fraguado y resistencia estructural."
    },
    {
      name: "Terminal de tren Norte",
      image: "/blaanco.jpg",
      description: "Infraestructura de transporte masivo con pisos industriales tratados con nuestros endurecedores Blanco, diseñados para alto tráfico peatonal."
    },
    {
      name: "Sede central de Sistemas Inc.",
      image: "/adagio-6.jpg",
      description: "Edificio corporativo donde implementamos soluciones integrales Adagio para construcción rápida sin comprometer la calidad estructural."
    },
    {
      name: "Antigua Terminal de embarque",
      image: "https://static.wixstatic.com/media/c837a6_a7011d6f73244f3081dfbd0fa1aa0d48~mv2.jpg/v1/fill/w_560,h_420,q_90,enc_avif,quality_auto/c837a6_a7011d6f73244f3081dfbd0fa1aa0d48~mv2.jpg",
      description: "Restauración de infraestructura histórica utilizando nuestros morteros especializados que respetan la arquitectura original mientras refuerzan la estructura."
    },
    {
      name: "Residencial El Cid",
      image: "https://static.wixstatic.com/media/c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.jpg/v1/fill/w_560,h_420,q_90,enc_avif,quality_auto/c837a6_7e9b1e4c7d834bde8aaefc3b04269ad4~mv2.jpg",
      description: "Conjunto residencial premium con acabados de lujo logrados mediante nuestros empastes y recubrimientos de alta gama."
    },
    {
      name: "Intersección de Lomas",
      image: "https://static.wixstatic.com/media/c837a6_d2f843c8d478408d84b9c9b3e43fe514~mv2.jpg/v1/fill/w_560,h_420,q_90,enc_avif,quality_auto/c837a6_d2f843c8d478408d84b9c9b3e43fe514~mv2.jpg",
      description: "Proyecto vial urbano equipado con nuestros selladores y recubrimientos especiales que garantizan durabilidad ante el tráfico intenso."
    }
  ];

  const handleNext = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex((selectedProjectIndex + 1) % proyectos.length);
    }
  };

  const handlePrevious = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex(
        selectedProjectIndex === 0 ? proyectos.length - 1 : selectedProjectIndex - 1
      );
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-cadeco-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-cadeco-dark mb-6">
              Nuestra empresa
            </h1>
            <p className="text-2xl md:text-3xl text-cadeco-orange font-light mb-8">
              Solidez técnica que impulsa la construcción moderna
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                <span className="font-medium text-cadeco-dark">Cadeco Aditivos Cía. Ltda.</span> es una empresa ecuatoriana dedicada a la
                fabricación de morteros adhesivos, empastes, boquillas para juntas, endurecedores
                de pisos, selladores y aditivos especializados para la construcción. Nuestras
                soluciones combinan tecnología de alto rendimiento, calidad certificada y soporte
                técnico personalizado.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                Desde Ecuador al mundo, fortalecemos relaciones de confianza con distribuidores,
                constructoras e inversionistas que buscan productos confiables, rentables e innovadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 bg-cadeco-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-8 shadow-lg text-center">
                <div className="text-5xl font-light text-cadeco-orange mb-2">1968</div>
                <p className="text-gray-600 font-light">Año de fundación</p>
              </div>
              <div className="bg-white p-8 shadow-lg text-center">
                <div className="text-5xl font-light text-cadeco-orange mb-2">1500+</div>
                <p className="text-gray-600 font-light">Proyectos realizados</p>
              </div>
              <div className="bg-white p-8 shadow-lg text-center">
                <div className="text-5xl font-light text-cadeco-orange mb-2">200+</div>
                <p className="text-gray-600 font-light">Profesionales comprometidos</p>
              </div>
              <div className="bg-white p-8 shadow-lg text-center">
                <div className="text-5xl font-light text-cadeco-orange mb-2">50+</div>
                <p className="text-gray-600 font-light">Alianzas estratégicas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados - Combinado */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-cadeco-dark mb-4">
                Proyectos destacados
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                Descubre cómo nuestros productos han transformado obras en todo Ecuador
              </p>
            </div>

            {/* Grid 3x5 con Imágenes clickeables */}
            <div className="grid md:grid-cols-3 gap-6">
              {proyectos.map((proyecto, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedProjectIndex(index)}
                  className="overflow-hidden cursor-pointer group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={proyecto.image}
                      alt={proyecto.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center bg-white">
                    <h3 className="font-light text-lg text-cadeco-dark group-hover:text-cadeco-orange transition-colors">
                      {proyecto.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cadeco-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-xl mb-8 font-light text-gray-300">
              Únete a más de 1500 proyectos exitosos que confían en Cadeco
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contacto"
                className="px-8 py-4 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors text-center"
                style={{ backgroundColor: 'rgb(213, 52, 3)' }}
              >
                Contáctanos
              </Link>
              <Link
                href="/#productos"
                className="px-8 py-4 border-2 border-white text-white font-light hover:bg-white hover:text-cadeco-dark transition-colors text-center"
              >
                Ver Productos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Proyectos */}
      <ProjectModal
        isOpen={selectedProjectIndex !== null}
        onClose={() => setSelectedProjectIndex(null)}
        project={selectedProjectIndex !== null ? proyectos[selectedProjectIndex] : null}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
}
