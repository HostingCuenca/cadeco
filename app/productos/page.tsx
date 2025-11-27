import Image from "next/image";
import { ChevronRight } from "lucide-react";
import productsData from "@/data/products.json";
import Header from "../components/Header";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = {
  title: "Productos - Cadeco Global Ecuador",
  description: "Explora nuestra línea completa de productos para la construcción: morteros, adhesivos, endurecedores, empastes, aditivos y acabados especiales.",
};

export default function ProductosPage() {
  const categories = productsData.categories;
  const allProducts = productsData.products as Record<string, any>;

  return (
    <>
      <Header />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-cadeco-dark to-cadeco-black">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-light mb-4">
            Nuestros Productos
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Soluciones de calidad certificada para cada etapa de tu proyecto
          </p>
        </div>
      </section>

      {/* Productos por Categoría */}
      <section className="py-16 bg-cadeco-gray">
        <div className="container mx-auto px-4">
          {categories.map((category: any) => {
            const categoryProducts = category.productIds
              .map((id: string) => allProducts[id])
              .filter(Boolean);

            return (
              <div key={category.id} id={category.slug} className="mb-20">
                {/* Header de Categoría */}
                <div className="mb-8">
                  <h2 className="text-4xl font-light text-cadeco-dark mb-2">
                    {category.name}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl">
                    {category.description}
                  </p>
                  <div className="w-24 h-1 bg-cadeco-orange mt-4"></div>
                </div>

                {/* Grid de Productos - Adaptable según cantidad */}
                <div className={`grid gap-8 ${
                  categoryProducts.length === 1
                    ? 'max-w-2xl mx-auto'
                    : categoryProducts.length === 2
                    ? 'md:grid-cols-2 gap-6'
                    : categoryProducts.length === 3
                    ? 'md:grid-cols-3 gap-6'
                    : 'md:grid-cols-2 lg:grid-cols-4'
                }`}>
                  {categoryProducts.map((product: any) => (
                    <div
                      key={product.id}
                      className="bg-white shadow-lg hover:shadow-2xl transition-all group"
                    >
                      {/* Imagen */}
                      <div className={`relative overflow-hidden bg-gray-50 ${
                        categoryProducts.length >= 1 && categoryProducts.length <= 3
                          ? 'h-[500px]'
                          : 'h-72'
                      }`}>
                        <Image
                          src={product.images.main}
                          alt={product.name}
                          fill
                          className={`group-hover:scale-105 transition-transform duration-500 ${
                            categoryProducts.length >= 1 && categoryProducts.length <= 3
                              ? 'object-contain p-6'
                              : 'object-cover'
                          }`}
                        />
                        {product.featured && (
                          <div className="absolute top-3 right-3 bg-cadeco-orange text-white px-3 py-1 text-xs font-medium rounded-full">
                            Destacado
                          </div>
                        )}
                      </div>

                      {/* Contenido */}
                      <div className={`p-5 ${
                        categoryProducts.length >= 1 && categoryProducts.length <= 3 ? 'p-6' : ''
                      }`}>
                        <span className="text-xs text-cadeco-orange font-medium uppercase tracking-wide">
                          {product.type}
                        </span>

                        <h3 className={`font-light text-cadeco-dark mt-2 mb-3 ${
                          categoryProducts.length >= 1 && categoryProducts.length <= 3 ? 'text-2xl' : 'text-xl'
                        }`}>
                          {product.name}
                        </h3>

                        <p className={`text-gray-600 mb-4 ${
                          categoryProducts.length >= 1 && categoryProducts.length <= 3
                            ? 'text-base line-clamp-4'
                            : 'text-sm line-clamp-3'
                        }`}>
                          {product.overview.shortDescription}
                        </p>

                        {/* Tags de Aplicación */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.applications.locations.slice(0, categoryProducts.length >= 1 && categoryProducts.length <= 3 ? 4 : 2).map((location: string) => (
                            <span
                              key={location}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                            >
                              {location}
                            </span>
                          ))}
                        </div>

                        {/* Empaque */}
                        {product.packaging && (
                          <div className="text-xs text-gray-500 mb-4">
                            Presentación: <strong>{product.packaging.weight}</strong>
                          </div>
                        )}

                        {/* Botones */}
                        <div className="space-y-2">
                          <a
                            href={`/productos/${category.slug}/${product.id}`}
                            className="w-full py-3 bg-cadeco-dark text-white text-sm font-medium hover:bg-cadeco-orange transition-colors flex items-center justify-center gap-2"
                          >
                            Ver Producto
                            <ChevronRight size={16} />
                          </a>
                          <a
                            href={`/contacto?producto=${encodeURIComponent(product.name)}`}
                            className="w-full py-3 border-2 border-cadeco-orange text-cadeco-orange text-sm font-medium hover:bg-cadeco-orange hover:text-white transition-colors flex items-center justify-center"
                          >
                            Solicitar Información
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Menú de Navegación Lateral Fijo */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white shadow-xl p-4 rounded-lg">
          <p className="text-xs font-medium text-gray-500 mb-3">CATEGORÍAS</p>
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.slug}`}
              className="block py-2 px-3 text-sm text-cadeco-dark hover:text-cadeco-orange hover:bg-gray-50 rounded transition-colors"
            >
              {category.name}
            </a>
          ))}
        </div>
      </nav>
    </main>
    <WhatsAppFloat />
    </>
  );
}
