"use client";

import Image from "next/image";
import Header from "./components/Header";
import ApplicationModal from "./components/ApplicationModal";
import WhatsAppFloat from "./components/WhatsAppFloat";
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

          {/* Productos Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Aditivos */}
            <div className="group relative overflow-hidden  shadow-2xl">
              <div className="relative h-96">
                <Image
                  src="/casa.jpg"
                  alt="Aditivos"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-cadeco-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h3 className="text-3xl font-light">Aditivos</h3>
                </div>
                <p className="text-gray-200 text-lg">
                  Nuestros aditivos industriales están formulados para mejorar las propiedades de los materiales
                  de construcción, ofreciendo soluciones innovadoras y eficientes para proyectos de infraestructura
                  a nivel global.
                </p>
              </div>
            </div>

            {/* Morteros y Recubrimientos */}
            <div className="group relative overflow-hidden  shadow-2xl">
              <div className="relative h-96">
                <Image
                  src="/cademix-producto.jpg"
                  alt="Morteros y Recubrimientos"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-cadeco-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <h3 className="text-3xl font-light">Morteros y Recubrimientos</h3>
                </div>
                <p className="text-gray-200 text-lg">
                  Ofrecemos una amplia gama de morteros y recubrimientos de alta calidad, diseñados para brindar
                  durabilidad y rendimiento en aplicaciones de construcción residencial, comercial e industrial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Productos - Grid */}
      <section className="py-20 bg-cadeco-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-cadeco-dark mb-4">
              Nuestros productos
            </h2>
            <p className="text-xl text-gray-600">
              Variedad y Calidad Garantizada
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Nuestros productos están diseñados para ofrecer soluciones efectivas y de alto rendimiento
              en la industria de la construcción. Conoce más sobre nuestra gama de aditivos, morteros y recubrimientos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Aditivos Industriales */}
            <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
              <div className="mb-4">
                <Droplet className="w-12 h-12" strokeWidth={1.5} style={{ color: 'rgb(213, 52, 3)' }} />
              </div>
              <h3 className="font-light text-xl text-cadeco-dark">Aditivos Industriales</h3>
            </div>

            {/* Morteros Especiales */}
            <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
              <div className="mb-4">
                <Building2 className="w-12 h-12" strokeWidth={1.5} style={{ color: 'rgb(213, 52, 3)' }} />
              </div>
              <h3 className="font-light text-xl text-cadeco-dark">Morteros Especiales</h3>
            </div>

            {/* Recubrimientos Innovadores */}
            <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
              <div className="mb-4">
                <PaintBucket className="w-12 h-12" strokeWidth={1.5} style={{ color: 'rgb(213, 52, 3)' }} />
              </div>
              <h3 className="font-light text-xl text-cadeco-dark">Recubrimientos Innovadores</h3>
            </div>

            {/* Asesoría Técnica */}
            <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
              <div className="mb-4">
                <BookOpen className="w-12 h-12" strokeWidth={1.5} style={{ color: 'rgb(213, 52, 3)' }} />
              </div>
              <h3 className="font-light text-xl text-cadeco-dark">Asesoría Técnica</h3>
            </div>

            {/* Desarrollo a Medida */}
            <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
              <div className="mb-4">
                <Lightbulb className="w-12 h-12" strokeWidth={1.5} style={{ color: 'rgb(213, 52, 3)' }} />
              </div>
              <h3 className="font-light text-xl text-cadeco-dark">Desarrollo a Medida</h3>
            </div>

            {/* Soporte Técnico Especializado */}
            <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
              <div className="mb-4">
                <Headphones className="w-12 h-12" strokeWidth={1.5} style={{ color: 'rgb(213, 52, 3)' }} />
              </div>
              <h3 className="font-light text-xl text-cadeco-dark">Soporte Técnico Especializado</h3>
            </div>

            {/* Asistencia Técnica en Obra */}
            <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
              <div className="mb-4">
                <Wrench className="w-12 h-12" strokeWidth={1.5} style={{ color: 'rgb(213, 52, 3)' }} />
              </div>
              <h3 className="font-light text-xl text-cadeco-dark">Asistencia Técnica en Obra</h3>
            </div>

            {/* Capacitación Especializada */}
            <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
              <div className="mb-4">
                <GraduationCap className="w-12 h-12" strokeWidth={1.5} style={{ color: 'rgb(213, 52, 3)' }} />
              </div>
              <h3 className="font-light text-xl text-cadeco-dark">Capacitación Especializada</h3>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contacto"
              className="inline-block px-8 py-4 bg-cadeco-orange text-white  font-medium hover:bg-cadeco-orange-light transition-colors text-lg"
            >
              Ver más
            </a>
          </div>
        </div>
      </section>

      {/* Proyectos y Alianzas Section */}
      <section id="alianzas" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Únete a nuestro equipo */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-cadeco-dark mb-6">
              Únete a nuestro equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos buscando talento
            </p>
          </div>

          {/* Vacantes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {/* Ingeniero de Producción */}
            <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-light text-cadeco-dark mb-4">
                Ingeniero de Producción
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Si eres un profesional comprometido en busca de nuevos desafíos, ¡queremos conocerte! Forma parte de nuestro equipo y contribuye al desarrollo de soluciones innovadoras en el sector industrial.
              </p>
              <button
                onClick={() => handleApplyClick("Ingeniero de Producción")}
                className="inline-block px-6 py-3 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors"
                style={{ backgroundColor: 'rgb(213, 52, 3)' }}
              >
                Aplicar ahora
              </button>
            </div>

            {/* Técnico de Control de Calidad */}
            <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-light text-cadeco-dark mb-4">
                Técnico de Control de Calidad
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ¿Tienes experiencia en control de calidad y buscas un ambiente de trabajo dinámico y retador? Esta es tu oportunidad para formar parte de un equipo enfocado en la excelencia y la mejora continua.
              </p>
              <button
                onClick={() => handleApplyClick("Técnico de Control de Calidad")}
                className="inline-block px-6 py-3 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors"
                style={{ backgroundColor: 'rgb(213, 52, 3)' }}
              >
                Aplicar ahora
              </button>
            </div>

            {/* Especialista en Logística */}
            <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-light text-cadeco-dark mb-4">
                Especialista en Logística
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Únete a nuestro equipo como especialista en logística y contribuye al éxito de nuestra cadena de suministro. Si buscas un entorno de trabajo colaborativo y desafíos constantes, esta es tu oportunidad.
              </p>
              <button
                onClick={() => handleApplyClick("Especialista en Logística")}
                className="inline-block px-6 py-3 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors"
                style={{ backgroundColor: 'rgb(213, 52, 3)' }}
              >
                Aplicar ahora
              </button>
            </div>

            {/* Supervisor de Producción */}
            <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-light text-cadeco-dark mb-4">
                Supervisor de Producción
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ¿Tienes experiencia liderando equipos de trabajo en entornos industriales? Si eres apasionado por la excelencia operativa, ¡queremos que formes parte de nuestro equipo!
              </p>
              <button
                onClick={() => handleApplyClick("Supervisor de Producción")}
                className="inline-block px-6 py-3 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors"
                style={{ backgroundColor: 'rgb(213, 52, 3)' }}
              >
                Aplicar ahora
              </button>
            </div>

            {/* Ingeniero de Procesos */}
            <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-light text-cadeco-dark mb-4">
                Ingeniero de Procesos
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Buscamos un ingeniero de procesos para contribuir al desarrollo y optimización de nuestras operaciones. Si eres proactivo y orientado a resultados, ¡te estamos buscando!
              </p>
              <button
                onClick={() => handleApplyClick("Ingeniero de Procesos")}
                className="inline-block px-6 py-3 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors"
                style={{ backgroundColor: 'rgb(213, 52, 3)' }}
              >
                Aplicar ahora
              </button>
            </div>

            {/* Técnico de Mantenimiento */}
            <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-light text-cadeco-dark mb-4">
                Técnico de Mantenimiento
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Si eres un técnico especializado en mantenimiento industrial, únete a nuestro equipo y participa en el cuidado y optimización de nuestros activos. ¡Esta es tu oportunidad para crecer y desarrollarte profesionalmente!
              </p>
              <button
                onClick={() => handleApplyClick("Técnico de Mantenimiento")}
                className="inline-block px-6 py-3 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors"
                style={{ backgroundColor: 'rgb(213, 52, 3)' }}
              >
                Aplicar ahora
              </button>
            </div>
          </div>

          {/* Imagen CONTRAPORTADA.gif */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="relative h-96 overflow-hidden shadow-2xl">
              <Image
                src="/CONTRAPORTADA.gif"
                alt="Cadeco - Únete a nuestro equipo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Nuestros Aliados */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-cadeco-dark mb-4">
              Nuestros Aliados
            </h3>
            <p className="text-xl text-gray-600">
              Confianza y Colaboración
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 shadow-lg flex items-center justify-center">
              <Image
                src="/ok-logos.gif"
                alt="Aliado"
                width={150}
                height={80}
                className="w-auto h-20 object-contain"
              />
            </div>
            <div className="bg-white p-6 shadow-lg flex items-center justify-center">
              <Image
                src="/logohorizontal-letrasblancas.png"
                alt="Aliado"
                width={150}
                height={80}
                className="w-auto h-20 object-contain"
              />
            </div>
            <div className="bg-white p-6 shadow-lg flex items-center justify-center">
              <Image
                src="/logoprincipal.png"
                alt="Aliado"
                width={150}
                height={80}
                className="w-auto h-20 object-contain"
              />
            </div>
            <div className="bg-white p-6 shadow-lg flex items-center justify-center">
              <Image
                src="/info-footer.gif"
                alt="Aliado"
                width={150}
                height={80}
                className="w-auto h-20 object-contain"
              />
            </div>
          </div>
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

      {/* Footer */}
      <footer className="bg-cadeco-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/logoprincipal-letrasblancas.png"
                alt="Cadeco Global"
                width={150}
                height={50}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400">
                Desde 1968 construyendo sueños y creando soluciones de calidad para la construcción moderna.
              </p>
            </div>
            <div>
              <h3 className="font-light text-lg mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-400 hover:text-cadeco-orange transition-colors">Inicio</a></li>
                <li><a href="#nosotros" className="text-gray-400 hover:text-cadeco-orange transition-colors">Nosotros</a></li>
                <li><a href="#productos" className="text-gray-400 hover:text-cadeco-orange transition-colors">Productos</a></li>
                <li><a href="#alianzas" className="text-gray-400 hover:text-cadeco-orange transition-colors">Alianzas y Proyectos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-light text-lg mb-4">Productos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cadeco-orange transition-colors">Aditivos Industriales</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cadeco-orange transition-colors">Morteros Especiales</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cadeco-orange transition-colors">Recubrimientos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cadeco-orange transition-colors">Asesoría Técnica</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li className="text-sm">Argelia Alta, Macuchi 251 y CuyuJa<br />Quito, Ecuador</li>
                <li>Fijo: (02) 3080 948</li>
                <li>WhatsApp/Cel:</li>
                <li className="ml-2">096 0162 310</li>
                <li className="ml-2">098 2428 979</li>
                <li>info@cadecoglobal.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p className="mb-2">&copy; 2024 Cadeco Global Ecuador. Todos los derechos reservados.</p>
            <p className="text-sm">
              Sitio web desarrollado por{" "}
              <a
                href="https://torisoftt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cadeco-orange hover:text-cadeco-orange-light transition-colors font-medium"
              >
                Torisoftt
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
