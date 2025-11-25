"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Plus, Edit, Trash2, LogOut, Upload, Save, X } from "lucide-react";

interface Product {
  id: string;
  name: string;
  categoryId: string;
  type: string;
  featured: boolean;
  images: {
    main: string;
  };
  overview: {
    shortDescription: string;
  };
  packaging?: {
    weight: string;
  };
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function AdminPanel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    loadData();
  }, [currentPage, selectedCategory]);

  const loadData = async () => {
    try {
      const url = `/api/products?page=${currentPage}&limit=10${
        selectedCategory ? `&category=${selectedCategory}` : ""
      }`;
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
      setCategories(data.categories);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar este producto?")) return;

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        loadData();
        alert("Producto eliminado exitosamente");
      }
    } catch (error) {
      alert("Error al eliminar producto");
    }
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const openCreateModal = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-cadeco-gray">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative w-32 h-10">
              <Image
                src="/logoprincipal-letrasblancas.png"
                alt="Cadeco"
                fill
                className="object-contain brightness-0"
              />
            </div>
            <h1 className="text-2xl font-light text-cadeco-dark">
              Panel de Administración
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white hover:bg-gray-700 transition-colors"
          >
            <LogOut size={18} />
            Cerrar Sesión
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="bg-white shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange"
              >
                <option value="">Todas las categorías</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <button
                onClick={() => router.push("/admin/projects")}
                className="px-4 py-2 border-2 border-cadeco-dark text-cadeco-dark hover:bg-cadeco-dark hover:text-white transition-colors"
              >
                Ver Proyectos
              </button>
            </div>

            <button
              onClick={openCreateModal}
              className="flex items-center gap-2 px-6 py-3 bg-cadeco-orange text-white hover:bg-cadeco-orange-light transition-colors"
            >
              <Plus size={20} />
              Crear Producto
            </button>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white shadow-lg overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <p className="text-gray-600">Cargando productos...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-600">No hay productos disponibles</p>
            </div>
          ) : (
            <>
              <table className="w-full">
                <thead className="bg-cadeco-gray">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-cadeco-dark">
                      Imagen
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-cadeco-dark">
                      Nombre
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-cadeco-dark">
                      Categoría
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-cadeco-dark">
                      Tipo
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-cadeco-dark">
                      Destacado
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-cadeco-dark">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="relative w-16 h-16">
                          <Image
                            src={product.images.main}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-cadeco-dark">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {product.overview.shortDescription.substring(0, 60)}...
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {categories.find((c) => c.id === product.categoryId)?.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {product.type}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {product.featured && (
                          <span className="inline-block px-3 py-1 text-xs bg-cadeco-orange text-white rounded-full">
                            Destacado
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => openEditModal(product)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="px-6 py-4 bg-cadeco-gray flex justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Anterior
                  </button>
                  <span className="px-4 py-2 bg-white border border-gray-300">
                    Página {currentPage} de {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Siguiente
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <ProductModal
          product={editingProduct}
          categories={categories}
          onClose={() => {
            setShowModal(false);
            setEditingProduct(null);
          }}
          onSave={() => {
            loadData();
            setShowModal(false);
            setEditingProduct(null);
          }}
        />
      )}
    </div>
  );
}

// Componente Modal separado
function ProductModal({
  product,
  categories,
  onClose,
  onSave,
}: {
  product: Product | null;
  categories: Category[];
  onClose: () => void;
  onSave: () => void;
}) {
  const [formData, setFormData] = useState({
    name: product?.name || "",
    slug: product?.id || "",
    categoryId: product?.categoryId || "",
    type: product?.type || "",
    featured: product?.featured || false,
    shortDescription: product?.overview.shortDescription || "",
    weight: product?.packaging?.weight || "",
    mainImage: product?.images.main || "",
  });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append("file", file);
    formDataUpload.append("category", formData.categoryId || "general");

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataUpload,
      });

      const data = await response.json();
      if (response.ok) {
        setFormData({ ...formData, mainImage: data.url });
      } else {
        alert("Error al subir imagen: " + data.error);
      }
    } catch (error) {
      alert("Error al subir imagen");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const productData = {
      slug: formData.slug,
      name: formData.name,
      categoryId: formData.categoryId,
      type: formData.type,
      featured: formData.featured,
      images: {
        main: formData.mainImage,
        banner: formData.mainImage,
        gallery: [],
      },
      overview: {
        shortDescription: formData.shortDescription,
        tagline: formData.shortDescription,
        fullDescription: formData.shortDescription,
      },
      packaging: {
        weight: formData.weight,
        unit: "unidad",
      },
      applications: {
        surfaces: [],
        locations: [],
        sectors: [],
        materials: [],
        special: [],
      },
      features: [],
      technicalSpecs: {},
      seo: {
        metaTitle: formData.name,
        metaDescription: formData.shortDescription,
        keywords: [formData.name],
      },
    };

    try {
      const url = product ? `/api/products/${product.id}` : "/api/products";
      const method = product ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        alert(product ? "Producto actualizado" : "Producto creado");
        onSave();
      } else {
        const data = await response.json();
        alert("Error: " + data.error);
      }
    } catch (error) {
      alert("Error al guardar producto");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white max-w-2xl w-full my-8 shadow-2xl">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-light text-cadeco-dark">
            {product ? "Editar Producto" : "Crear Producto"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <div>
            <label className="block text-sm font-medium text-cadeco-dark mb-2">
              Nombre del Producto *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cadeco-dark mb-2">
              Slug (ID único) *
            </label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  slug: e.target.value.toLowerCase().replace(/\s+/g, "-"),
                })
              }
              className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange"
              required
              disabled={!!product}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-cadeco-dark mb-2">
                Categoría *
              </label>
              <select
                value={formData.categoryId}
                onChange={(e) =>
                  setFormData({ ...formData, categoryId: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange"
                required
              >
                <option value="">Seleccionar...</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-cadeco-dark mb-2">
                Tipo de Producto *
              </label>
              <input
                type="text"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-cadeco-dark mb-2">
              Descripción Corta *
            </label>
            <textarea
              value={formData.shortDescription}
              onChange={(e) =>
                setFormData({ ...formData, shortDescription: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cadeco-dark mb-2">
              Peso/Presentación
            </label>
            <input
              type="text"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              placeholder="Ej: 20kg, 2.2kg, etc."
              className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cadeco-dark mb-2">
              Imagen Principal *
            </label>
            <div className="space-y-2">
              {formData.mainImage && (
                <div className="relative w-32 h-32 border border-gray-300">
                  <Image
                    src={formData.mainImage}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-4 py-2 border border-gray-300"
                disabled={uploading || !formData.categoryId}
              />
              {uploading && (
                <p className="text-sm text-gray-600">Subiendo imagen...</p>
              )}
              {!formData.categoryId && (
                <p className="text-sm text-orange-600">
                  Selecciona una categoría primero
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) =>
                setFormData({ ...formData, featured: e.target.checked })
              }
              className="w-4 h-4"
            />
            <label className="text-sm font-medium text-cadeco-dark">
              Marcar como destacado
            </label>
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={saving || uploading || !formData.mainImage}
              className="px-6 py-3 bg-cadeco-orange text-white hover:bg-cadeco-orange-light disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Save size={18} />
              {saving ? "Guardando..." : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
