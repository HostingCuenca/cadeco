"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  type: string;
  featured: boolean;
  images: {
    main: string;
  };
  overview: {
    shortDescription: string;
  };
  features: Array<{
    title: string;
  }>;
  packaging?: {
    weight: string;
  };
  applications: {
    locations: string[];
  };
}

interface ProductListProps {
  categoryId: string;
  categoryName: string;
  initialProducts: Product[];
}

export default function ProductList({
  categoryId,
  categoryName,
  initialProducts,
}: ProductListProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const productsPerPage = 8;

  useEffect(() => {
    loadProducts(currentPage);
  }, [currentPage]);

  const loadProducts = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/products?category=${categoryId}&page=${page}&limit=${productsPerPage}`
      );
      const data = await response.json();
      setProducts(data.products);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Grid de Productos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {loading ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600">Cargando productos...</p>
          </div>
        ) : (
          products.map((product: Product) => (
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
                      <svg
                        className="w-4 h-4 text-cadeco-orange flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
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
          ))
        )}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1 || loading}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-cadeco-dark text-cadeco-dark hover:bg-cadeco-dark hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-cadeco-dark"
          >
            <ChevronLeft size={20} />
            Anterior
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                disabled={loading}
                className={`w-10 h-10 flex items-center justify-center transition-colors ${
                  page === currentPage
                    ? "bg-cadeco-orange text-white"
                    : "bg-white border border-gray-300 text-cadeco-dark hover:bg-cadeco-gray"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages || loading}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-cadeco-dark text-cadeco-dark hover:bg-cadeco-dark hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-cadeco-dark"
          >
            Siguiente
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
