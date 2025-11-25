"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Plus, Edit, Trash2, ArrowLeft, Save, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  description: string;
  featured: boolean;
  images: {
    main: string;
    gallery?: string[];
  };
  productsUsed?: string[];
}

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  useEffect(() => {
    loadProjects();
  }, [currentPage]);

  const loadProjects = async () => {
    try {
      const response = await fetch(`/api/projects?page=${currentPage}&limit=10`);
      const data = await response.json();
      setProjects(data.projects);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error("Error loading projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar este proyecto?")) return;

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        loadProjects();
        alert("Proyecto eliminado exitosamente");
      }
    } catch (error) {
      alert("Error al eliminar proyecto");
    }
  };

  const openEditModal = (project: Project) => {
    setEditingProject(project);
    setShowModal(true);
  };

  const openCreateModal = () => {
    setEditingProject(null);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-cadeco-gray">
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/admin")}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-light text-cadeco-dark">
              Gestión de Proyectos
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg p-6 mb-6 flex justify-between items-center">
          <h2 className="text-xl font-light">Proyectos Registrados</h2>
          <button
            onClick={openCreateModal}
            className="flex items-center gap-2 px-6 py-3 bg-cadeco-orange text-white hover:bg-cadeco-orange-light transition-colors"
          >
            <Plus size={20} />
            Crear Proyecto
          </button>
        </div>

        <div className="bg-white shadow-lg overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <p className="text-gray-600">Cargando proyectos...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-600">No hay proyectos disponibles</p>
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
                      Título
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-cadeco-dark">
                      Cliente
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-cadeco-dark">
                      Ubicación
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-cadeco-dark">
                      Año
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
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="relative w-20 h-16">
                          <Image
                            src={project.images.main}
                            alt={project.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-cadeco-dark">
                          {project.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {project.client}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {project.location}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {project.year}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {project.featured && (
                          <span className="inline-block px-3 py-1 text-xs bg-cadeco-orange text-white rounded-full">
                            Destacado
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => openEditModal(project)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(project.id)}
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

      {showModal && (
        <ProjectModal
          project={editingProject}
          onClose={() => {
            setShowModal(false);
            setEditingProject(null);
          }}
          onSave={() => {
            loadProjects();
            setShowModal(false);
            setEditingProject(null);
          }}
        />
      )}
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
  onSave,
}: {
  project: Project | null;
  onClose: () => void;
  onSave: () => void;
}) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    slug: project?.id || "",
    client: project?.client || "",
    location: project?.location || "",
    year: project?.year || new Date().getFullYear().toString(),
    description: project?.description || "",
    featured: project?.featured || false,
    mainImage: project?.images.main || "",
  });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append("file", file);
    formDataUpload.append("category", "proyectos");

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

    const projectData = {
      slug: formData.slug,
      title: formData.title,
      client: formData.client,
      location: formData.location,
      year: formData.year,
      description: formData.description,
      featured: formData.featured,
      images: {
        main: formData.mainImage,
        gallery: [],
      },
      productsUsed: [],
    };

    try {
      const url = project ? `/api/projects/${project.id}` : "/api/projects";
      const method = project ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        alert(project ? "Proyecto actualizado" : "Proyecto creado");
        onSave();
      } else {
        const data = await response.json();
        alert("Error: " + data.error);
      }
    } catch (error) {
      alert("Error al guardar proyecto");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white max-w-2xl w-full my-8 shadow-2xl">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-light text-cadeco-dark">
            {project ? "Editar Proyecto" : "Crear Proyecto"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <div>
            <label className="block text-sm font-medium text-cadeco-dark mb-2">
              Título del Proyecto *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
              disabled={!!project}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-cadeco-dark mb-2">
                Cliente *
              </label>
              <input
                type="text"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-cadeco-dark mb-2">
                Ubicación *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-cadeco-dark mb-2">
              Año *
            </label>
            <input
              type="text"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cadeco-dark mb-2">
              Descripción *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cadeco-dark mb-2">
              Imagen Principal *
            </label>
            <div className="space-y-2">
              {formData.mainImage && (
                <div className="relative w-full h-48 border border-gray-300">
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
                disabled={uploading}
              />
              {uploading && (
                <p className="text-sm text-gray-600">Subiendo imagen...</p>
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
