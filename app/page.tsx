"use client";

import Image from "next/image";
import Header from "./components/Header";
import ApplicationModal from "./components/ApplicationModal";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ProjectGallery from "./components/ProjectGallery";
import { useState } from "react";
import {
  Droplet,
  Building2,
  PaintBucket,
  BookOpen,
  Lightbulb,
  Headphones,
  Wrench,
  GraduationCap
} from "lucide-react";
import productsData from "@/data/products.json";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  const handleApplyClick = (position: string) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Video Background */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://video.wixstatic.com/video/11062b_e5682b07ba5f45fa9cc99bef05f42456/720p/mp4/file.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay - Dark left to transparent right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="relative w-48 h-16">
                <Image
                  src="/logoprincipal-letrasblancas.png"
                  alt="Cadeco Global"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
              Desarrollamos confianza, rendimiento y soluciones técnicas para la construcción moderna.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
              Fabricamos aditivos, morteros y recubrimientos de alto desempeño con respaldo técnico, entrega eficiente y calidad certificada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#productos"
                className="px-8 py-4 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors text-center text-lg"
              >
                Ver Catálogo
              </a>
              <a
                href="#contacto"
                className="px-8 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-cadeco-dark transition-colors text-center text-lg"
              >
                Hablar con un asesor Cadeco
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-sm">Scroll</span>
            <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-cadeco-orange py-6">
        <div className="container mx-auto px-4">
          <p className="text-white text-center text-lg md:text-xl font-medium">
            Construyendo juntos un futuro sostenible
          </p>
        </div>
      </section>

      {/* About Section - Cadeco Global */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-cadeco-dark mb-4">
              Cadeco Global, expertos en aditivos industriales
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <Image
              src="/adagiooo.jpg"
              alt="Cadeco Global"
              width={1200}
              height={600}
              className="w-full h-auto  shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20 bg-cadeco-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-cadeco-dark mb-4">
              Quiénes somos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div>
              <h3 className="text-3xl font-light text-cadeco-dark mb-6">
                Experiencia y Compromiso
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Cadeco Global es sinónimo de excelencia y compromiso en la industria de la construcción.
                Desde 1968, hemos liderado el desarrollo de soluciones innovadoras que han marcado un
                impacto positivo en proyectos a nivel nacional e internacional.
              </p>
              <div className="inline-block px-6 py-3 bg-cadeco-orange text-white  font-medium">
                Calidad Certificada
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8  shadow-lg text-center">
                <div className="text-5xl font-light text-cadeco-orange mb-2">1968</div>
                <p className="text-gray-600 font-medium">Año de fundación</p>
              </div>
              <div className="bg-white p-8  shadow-lg text-center">
                <div className="text-5xl font-light text-cadeco-orange mb-2">1500+</div>
                <p className="text-gray-600 font-medium">Proyectos realizados</p>
              </div>
              <div className="bg-white p-8  shadow-lg text-center">
                <div className="text-5xl font-light text-cadeco-orange mb-2">200+</div>
                <p className="text-gray-600 font-medium">Profesionales comprometidos</p>
              </div>
              <div className="bg-white p-8  shadow-lg text-center">
                <div className="text-5xl font-light text-cadeco-orange mb-2">50+</div>
                <p className="text-gray-600 font-medium">Alianzas estratégicas</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg italic text-gray-600">
              &quot;José Pérez - Gerente General, Cadeco Global&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Productos Section Intro */}
      <section id="productos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-cadeco-dark mb-6">
              Productos
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Cadeco Global es una empresa ecuatoriana dedicada a la fabricación de aditivos, morteros y
              recubrimientos para la construcción. Desarrollamos soluciones de alto rendimiento con calidad
              certificada y respaldo técnico. Desde Ecuador al mundo, construimos relaciones de confianza con
              distribuidores, constructoras e inversionistas que buscan innovación y rentabilidad en el sector industrial.
            </p>
          </div>

          {/* Productos Cards - Categorías desde JSON */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {productsData.categories.map((category) => (
              <div key={category.id} className="group shadow-2xl hover:shadow-3xl transition-all">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-light text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {category.productIds.length} productos disponibles
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <a
                    href={`#productos-${category.slug}`}
                    className="inline-block text-cadeco-orange font-medium hover:text-cadeco-orange-light transition-colors"
                  >
                    Ver productos →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Destacados */}
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-light text-cadeco-dark mb-8 text-center">
              Productos Destacados
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(productsData.products)
                .filter((product: any) => product.featured)
                .slice(0, 4)
                .map((product: any) => (
                  <div key={product.id} className="bg-white shadow-lg hover:shadow-2xl transition-shadow group">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={product.images.main}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-cadeco-orange font-medium uppercase tracking-wide">
                        {product.type}
                      </span>
                      <h4 className="text-lg font-light text-cadeco-dark mt-2 mb-2">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.overview.shortDescription}
                      </p>
                      <button className="text-sm text-cadeco-orange font-medium hover:text-cadeco-orange-light transition-colors">
                        Ver detalles →
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo Completo por Categorías */}
      {productsData.categories.map((category, categoryIndex) => {
        const categoryProducts = category.productIds.map(
          (id) => productsData.products[id as keyof typeof productsData.products]
        );

        return (
          <section
            key={category.id}
            id={`productos-${category.slug}`}
            className={categoryIndex % 2 === 0 ? "py-20 bg-white" : "py-20 bg-cadeco-gray"}
          >
            <div className="container mx-auto px-4">
              {/* Header de Categoría */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-light text-cadeco-dark mb-4">
                  {category.name}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Grid de Productos */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {categoryProducts.map((product: any) => (
                  <div
                    key={product.id}
                    className="bg-white shadow-lg hover:shadow-2xl transition-all group"
                  >
                    {/* Imagen del Producto */}
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={product.images.main}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.featured && (
                        <div className="absolute top-3 right-3 bg-cadeco-orange text-white px-3 py-1 text-xs font-medium rounded-full">
                          Destacado
                        </div>
                      )}
                    </div>

                    {/* Contenido del Producto */}
                    <div className="p-5">
                      {/* Tipo de Producto */}
                      <span className="text-xs text-cadeco-orange font-medium uppercase tracking-wide">
                        {product.type}
                      </span>

                      {/* Nombre */}
                      <h3 className="text-xl font-light text-cadeco-dark mt-2 mb-3">
                        {product.name}
                      </h3>

                      {/* Descripción Corta */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {product.overview.shortDescription}
                      </p>

                      {/* Tags de Aplicación */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.applications.locations.slice(0, 2).map((location: string) => (
                          <span
                            key={location}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {location}
                          </span>
                        ))}
                      </div>

                      {/* Características Principales */}
                      <div className="space-y-2 mb-4">
                        {product.features.slice(0, 3).map((feature: any, idx: number) => (
                          <div key={idx} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-cadeco-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-gray-700">{feature.title}</span>
                          </div>
                        ))}
                      </div>

                      {/* Empaque */}
                      {product.packaging && (
                        <div className="text-xs text-gray-500 mb-4">
                          Presentación: <strong>{product.packaging.weight}</strong>
                        </div>
                      )}

                      {/* Botón */}
                      <button className="w-full py-3 bg-cadeco-dark text-white text-sm font-medium hover:bg-cadeco-orange transition-colors">
                        Ver ficha técnica
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Servicios y Soporte */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-cadeco-dark mb-4">
              Servicios y Soporte
            </h2>
            <p className="text-xl text-gray-600">
              Más que productos, ofrecemos soluciones completas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Asesoría Técnica */}
            <div className="bg-cadeco-gray p-8 shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
              <div className="mb-4">
                <BookOpen className="w-12 h-12" strokeWidth={1.5} style={{ color: 'rgb(213, 52, 3)' }} />
              </div>
              <h3 className="font-light text-xl text-cadeco-dark">Asesoría Técnica</h3>
            </div>

            {/* Desarrollo a Medida */}
            <div className="bg-cadeco-gray p-8 shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
              <div className="mb-4">
                <Lightbulb className="w-12 h-12" strokeWidth={1.5} style={{ color: 'rgb(213, 52, 3)' }} />
              </div>
              <h3 className="font-light text-xl text-cadeco-dark">Desarrollo a Medida</h3>
            </div>

            {/* Soporte Técnico */}
            <div className="bg-cadeco-gray p-8 shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
              <div className="mb-4">
                <Headphones className="w-12 h-12" strokeWidth={1.5} style={{ color: 'rgb(213, 52, 3)' }} />
              </div>
              <h3 className="font-light text-xl text-cadeco-dark">Soporte Especializado</h3>
            </div>

            {/* Capacitación */}
            <div className="bg-cadeco-gray p-8 shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
              <div className="mb-4">
                <GraduationCap className="w-12 h-12" strokeWidth={1.5} style={{ color: 'rgb(213, 52, 3)' }} />
              </div>
              <h3 className="font-light text-xl text-cadeco-dark">Capacitación</h3>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contacto"
              className="inline-block px-8 py-4 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors text-lg"
            >
              Solicitar asesoría
            </a>
          </div>
        </div>
      </section>

      {/* Alianzas Section */}
      <section id="alianzas" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Nuestros Aliados */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-cadeco-dark mb-4">
              Nuestros Aliados
            </h3>
            <p className="text-xl text-gray-600">
              Confianza y Colaboración
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-48 md:h-64">
              <Image
                src="/ok-logos.gif"
                alt="Nuestros Aliados"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Impacto Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-cadeco-dark mb-4">
              Nuestro Impacto
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Proyectos Destacados
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conoce algunos de los proyectos en los que hemos participado y descubre cómo nuestras soluciones
              han contribuido al éxito y la excelencia en la industria de la construcción.
            </p>
          </div>

          {/* Galería Horizontal con Flechas */}
          <ProjectGallery />
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-cadeco-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-cadeco-dark mb-4">Contáctanos</h2>
              <p className="text-xl text-gray-600">
                Estamos listos para hacer realidad tu próximo proyecto
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cadeco-orange flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-light text-cadeco-dark mb-1">Teléfonos</h3>
                    <p className="text-gray-600">Fijo: (02) 3080 948</p>
                    <p className="text-gray-600">WhatsApp/Cel:</p>
                    <p className="text-gray-600 ml-2">096 0162 310</p>
                    <p className="text-gray-600 ml-2">098 2428 979</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cadeco-orange flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-light text-cadeco-dark mb-1">Email</h3>
                    <p className="text-gray-600">info@cadecoglobal.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cadeco-orange flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-light text-cadeco-dark mb-1">Ubicación</h3>
                    <p className="text-gray-600">Argelia Alta, Macuchi 251 y CuyuJa</p>
                    <p className="text-gray-600">Quito, Ecuador</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-light text-cadeco-dark mb-4">Síguenos en redes sociales</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-cadeco-orange  flex items-center justify-center hover:bg-cadeco-orange-light transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-cadeco-orange  flex items-center justify-center hover:bg-cadeco-orange-light transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-cadeco-orange  flex items-center justify-center hover:bg-cadeco-orange-light transition-colors">
                      <span className="sr-only">TikTok</span>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <form className="space-y-4 bg-white p-8  shadow-lg">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cadeco-dark mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cadeco-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-cadeco-dark mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                    placeholder="+593 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cadeco-dark mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-cadeco-orange text-white  font-medium hover:bg-cadeco-orange-light transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Aplicación */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        position={selectedPosition}
      />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
}
