import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronLeft, Download, Package, MapPin, Calendar } from "lucide-react";
import productsData from "@/data/products.json";
import Header from "@/app/components/Header";
import WhatsAppFloat from "@/app/components/WhatsAppFloat";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = productsData.products[slug as keyof typeof productsData.products];

  if (!product) {
    return {
      title: "Producto no encontrado - Cadeco Global Ecuador",
    };
  }

  return {
    title: `${product.name} - Cadeco Global Ecuador`,
    description: product.overview.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const product = productsData.products[slug as keyof typeof productsData.products];

  if (!product) {
    notFound();
  }

  const categoryData = productsData.categories.find((cat) => cat.slug === category);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cadeco-gray">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <a
            href="/productos"
            className="inline-flex items-center gap-2 text-cadeco-orange hover:text-cadeco-orange-light transition-colors mb-4"
          >
            <ChevronLeft size={20} />
            Volver a Productos
          </a>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-cadeco-orange">Inicio</a>
            <span>/</span>
            <a href="/productos" className="hover:text-cadeco-orange">Productos</a>
            <span>/</span>
            <a href={`/productos#${category}`} className="hover:text-cadeco-orange">
              {categoryData?.name}
            </a>
            <span>/</span>
            <span className="text-cadeco-dark">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative h-[500px] bg-white shadow-lg overflow-hidden">
                <Image
                  src={product.images.main}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
              {product.images.gallery && product.images.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.gallery.map((img, index) => (
                    <div key={index} className="relative h-24 bg-white shadow cursor-pointer hover:shadow-lg transition-shadow">
                      <Image
                        src={img}
                        alt={`${product.name} - Vista ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="bg-white shadow-lg p-8">
              <span className="inline-block px-4 py-1 bg-cadeco-orange text-white text-xs font-medium uppercase tracking-wide mb-4">
                {product.type}
              </span>

              <h1 className="text-4xl font-light text-cadeco-dark mb-4">
                {product.name}
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {product.overview.shortDescription}
              </p>

              {/* Quick Info */}
              <div className="space-y-3 mb-8 pb-8 border-b border-gray-200">
                {product.packaging && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <Package className="text-cadeco-orange" size={20} />
                    <span><strong>Presentación:</strong> {product.packaging.weight}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="text-cadeco-orange" size={20} />
                  <span><strong>Aplicaciones:</strong> {product.applications.locations.join(", ")}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href={`/contacto?producto=${encodeURIComponent(product.name)}`}
                  className="block w-full py-4 bg-cadeco-orange text-white text-center font-medium hover:bg-cadeco-orange-light transition-colors shadow-lg"
                >
                  Solicitar Información
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=593960162310&text=Hola+Cadeco%2C+me+interesa+el+producto+{product.name}&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 border-2 border-cadeco-dark text-cadeco-dark font-medium hover:bg-cadeco-dark hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <div className="bg-white shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Características */}
              <div>
                <h2 className="text-2xl font-light text-cadeco-dark mb-6 border-b border-cadeco-orange pb-3">
                  Características
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-cadeco-orange mt-1">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Beneficios */}
              <div>
                <h2 className="text-2xl font-light text-cadeco-dark mb-6 border-b border-cadeco-orange pb-3">
                  Beneficios
                </h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-cadeco-orange mt-1">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Aplicaciones */}
            {product.applications.uses && product.applications.uses.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-light text-cadeco-dark mb-6">
                  Aplicaciones Recomendadas
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {product.applications.uses.map((use, index) => (
                    <div key={index} className="bg-cadeco-gray p-4 rounded">
                      <p className="text-gray-700">{use}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modo de Uso */}
            {product.usage && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-light text-cadeco-dark mb-6">
                  Modo de Uso
                </h2>
                <div className="space-y-4">
                  {product.usage.preparation && (
                    <div>
                      <h3 className="font-medium text-cadeco-dark mb-2">Preparación:</h3>
                      <p className="text-gray-700">{product.usage.preparation}</p>
                    </div>
                  )}
                  {product.usage.application && (
                    <div>
                      <h3 className="font-medium text-cadeco-dark mb-2">Aplicación:</h3>
                      <p className="text-gray-700">{product.usage.application}</p>
                    </div>
                  )}
                  {product.usage.curing && (
                    <div>
                      <h3 className="font-medium text-cadeco-dark mb-2">Curado:</h3>
                      <p className="text-gray-700">{product.usage.curing}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Especificaciones Técnicas */}
            {product.specifications && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-light text-cadeco-dark mb-6">
                  Especificaciones Técnicas
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="bg-cadeco-gray p-4">
                      <span className="font-medium text-cadeco-dark capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="ml-2 text-gray-700">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Related Products */}
          {categoryData && (
            <div className="mt-12">
              <h2 className="text-3xl font-light text-cadeco-dark mb-8">
                Productos Relacionados
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {categoryData.productIds
                  .filter((id) => id !== slug)
                  .slice(0, 4)
                  .map((id) => {
                    const relatedProduct = productsData.products[id as keyof typeof productsData.products];
                    return (
                      <a
                        key={id}
                        href={`/productos/${category}/${id}`}
                        className="bg-white shadow-lg hover:shadow-2xl transition-shadow group"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={relatedProduct.images.main}
                            alt={relatedProduct.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-light text-cadeco-dark mb-2">
                            {relatedProduct.name}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {relatedProduct.overview.shortDescription}
                          </p>
                        </div>
                      </a>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
    <WhatsAppFloat />
    </>
  );
}
