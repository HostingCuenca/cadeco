"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-44 h-16">
            <Image
              src="/logoprincipal.png"
              alt="Cadeco Ecuador"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="/" className="text-cadeco-dark hover:text-cadeco-orange transition-colors font-medium">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/#nosotros" className="text-cadeco-dark hover:text-cadeco-orange transition-colors font-medium">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/#productos" className="text-cadeco-dark hover:text-cadeco-orange transition-colors font-medium">
              Productos
            </Link>
          </li>
          <li>
            <Link href="/#alianzas" className="text-cadeco-dark hover:text-cadeco-orange transition-colors font-medium">
              Alianzas y Proyectos
            </Link>
          </li>
          <li>
            <Link href="/#contacto" className="text-cadeco-dark hover:text-cadeco-orange transition-colors font-medium">
              Contacto
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Redes Sociales */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/cadecoaditivos?igsh=dGVuaWcyYWpmeTY0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-cadeco-orange transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/cadecoaditivoscompania?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-cadeco-orange transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@cadeco_aditivos?_t=ZM-90lSBYa7HxY&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-cadeco-orange transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>

          {/* Botón WhatsApp */}
          {/* <a
            href="https://api.whatsapp.com/send/?phone=593960162310&text=Hola+Cadeco%2C+me+interesa+su+l%C3%ADnea+de+productos&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors"
            style={{ backgroundColor: 'rgb(213, 52, 3)' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Habla con un asesor
          </a> */}

          <button
            className="md:hidden p-2 text-cadeco-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="container mx-auto px-4 py-4 space-y-4">
            <li>
              <Link
                href="/"
                className="block text-cadeco-dark hover:text-cadeco-orange transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/#nosotros"
                className="block text-cadeco-dark hover:text-cadeco-orange transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/#productos"
                className="block text-cadeco-dark hover:text-cadeco-orange transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                href="/#alianzas"
                className="block text-cadeco-dark hover:text-cadeco-orange transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Alianzas y Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/#contacto"
                className="block text-cadeco-dark hover:text-cadeco-orange transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>

            {/* Redes Sociales en móvil */}
            <li className="pt-4 border-t">
              <div className="flex items-center gap-4 justify-center">
                <a
                  href="https://www.instagram.com/cadecoaditivos?igsh=dGVuaWcyYWpmeTY0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-cadeco-orange transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/cadecoaditivoscompania?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-cadeco-orange transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@cadeco_aditivos?_t=ZM-90lSBYa7HxY&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-cadeco-orange transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </li>

            {/* Botón WhatsApp en móvil */}
            {/* <li className="pt-2">
              <a
                href="https://api.whatsapp.com/send/?phone=593960162310&text=Hola+Cadeco%2C+me+interesa+su+l%C3%ADnea+de+productos&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors w-full"
                style={{ backgroundColor: 'rgb(213, 52, 3)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Habla con un asesor
              </a>
            </li> */}
          </ul>
        </div>
      )}
    </header>
  );
}
