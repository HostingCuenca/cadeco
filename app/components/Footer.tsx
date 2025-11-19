import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
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
          <p className="mb-2">&copy; 2025 Cadeco Global Ecuador. Todos los derechos reservados.</p>
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
  );
}
