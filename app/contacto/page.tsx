"use client";

import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-cadeco-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-cadeco-dark mb-6">
              Contáctanos
            </h1>
            <p className="text-2xl md:text-3xl text-cadeco-orange font-light mb-8">
              Estamos aquí para ayudarte
            </p>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nuestro equipo está disponible para responder tus consultas,
              asesorarte técnicamente y apoyarte en cada etapa de tu proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-cadeco-dark mb-12 text-center">
              Información de contacto
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Dirección */}
              <div className="bg-white p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-cadeco-orange flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-cadeco-dark mb-2">
                      Dirección
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Argelia Alta, Macuchi 251 y CuyuJa<br />
                      Quito, Ecuador
                    </p>
                  </div>
                </div>
              </div>

              {/* Teléfonos */}
              <div className="bg-white p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-cadeco-orange flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-cadeco-dark mb-2">
                      Teléfonos
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Fijo:</strong> (02) 3080 948</p>
                      <p><strong>WhatsApp/Celulares:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>096 0162 310</li>
                        <li>098 2428 979</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-cadeco-orange flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-cadeco-dark mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      info@cadecoglobal.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Horario */}
              <div className="bg-white p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-cadeco-orange flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-cadeco-dark mb-2">
                      Horario de Atención
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                      <p>Sábado: 8:00 AM - 12:00 PM</p>
                      <p>Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de Contacto Rápido */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <a
                href="https://api.whatsapp.com/send/?phone=593960162310&text=Hola+Cadeco%2C+me+interesa+su+l%C3%ADnea+de+productos&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-6 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors text-lg"
                style={{ backgroundColor: 'rgb(213, 52, 3)' }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chatear por WhatsApp (096 0162 310)
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=593982428979&text=Hola+Cadeco%2C+me+interesa+su+l%C3%ADnea+de+productos&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-6 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors text-lg"
                style={{ backgroundColor: 'rgb(213, 52, 3)' }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chatear por WhatsApp (098 2428 979)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="py-20 bg-cadeco-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-cadeco-dark mb-4">
                Envíanos un mensaje
              </h2>
              <p className="text-xl text-gray-600">
                Completa el formulario y te responderemos a la brevedad
              </p>
            </div>

            <form className="bg-white p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-cadeco-dark mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cadeco-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                    placeholder="juan@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-cadeco-dark mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                    placeholder="+593 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-cadeco-dark mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="asunto" className="block text-sm font-medium text-cadeco-dark mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="asunto"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-sm font-medium text-cadeco-dark mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors text-lg"
                style={{ backgroundColor: 'rgb(213, 52, 3)' }}
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-cadeco-dark mb-12 text-center">
              Encuéntranos
            </h2>
            <div className="aspect-video w-full bg-gray-200 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7986894894894!2d-78.51234!3d-0.23456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTQnMDQuNCJTIDc4wrAzMCc0NC40Ilc!5e0!3m2!1ses!2sec!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Cadeco Ecuador"
              ></iframe>
            </div>
            <p className="text-center text-gray-600 mt-6">
              Argelia Alta, Macuchi 251 y CuyuJa, Quito, Ecuador
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cadeco-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-xl mb-8 font-light text-gray-300">
              Nuestro equipo está listo para ayudarte con tu proyecto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send/?phone=593960162310&text=Hola+Cadeco%2C+me+interesa+su+l%C3%ADnea+de+productos&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors text-center"
                style={{ backgroundColor: 'rgb(213, 52, 3)' }}
              >
                Hablar por WhatsApp
              </a>
              <Link
                href="/"
                className="px-8 py-4 border-2 border-white text-white font-light hover:bg-white hover:text-cadeco-dark transition-colors text-center"
              >
                Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </section>

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
              <p className="text-gray-400 font-light">
                Desde 1968 construyendo sueños y creando soluciones de calidad para la construcción moderna.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-cadeco-orange transition-colors font-light">Inicio</Link></li>
                <li><Link href="/nosotros" className="text-gray-400 hover:text-cadeco-orange transition-colors font-light">Nosotros</Link></li>
                <li><Link href="/#productos" className="text-gray-400 hover:text-cadeco-orange transition-colors font-light">Productos</Link></li>
                <li><Link href="/contacto" className="text-gray-400 hover:text-cadeco-orange transition-colors font-light">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Productos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cadeco-orange transition-colors font-light">Aditivos Industriales</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cadeco-orange transition-colors font-light">Morteros Especiales</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cadeco-orange transition-colors font-light">Recubrimientos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cadeco-orange transition-colors font-light">Asesoría Técnica</a></li>
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
