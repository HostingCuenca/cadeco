"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: string;
}

export default function ApplicationModal({ isOpen, onClose, position }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    puesto: "",
    mensaje: "",
    carta: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construir mensaje para WhatsApp
    const mensaje = `
Hola Cadeco, me gustaría aplicar para: *${position}*

*Datos del Aplicante:*
Nombre: ${formData.nombre} ${formData.apellido}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Empresa actual: ${formData.empresa}
Puesto actual: ${formData.puesto}

*Mensaje:*
${formData.mensaje}

*Carta de presentación:*
${formData.carta}
    `.trim();

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=593960162310&text=${mensajeCodificado}&type=phone_number&app_absent=0`;

    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank');

    // Cerrar modal y resetear formulario
    onClose();
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      empresa: "",
      puesto: "",
      mensaje: "",
      carta: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white text-cadeco-dark hover:bg-cadeco-orange hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="p-8 pb-6">
          <h2 className="text-3xl font-light text-cadeco-dark mb-2">
            Construyendo relaciones de confianza
          </h2>
          <p className="text-xl text-cadeco-orange font-light mb-4">
            Contáctanos
          </p>
          <p className="text-gray-600">
            Aplicando para: <span className="font-medium text-cadeco-dark">{position}</span>
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="px-8 pb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-cadeco-dark mb-2">
                Nombre *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                placeholder="Juan"
              />
            </div>

            <div>
              <label htmlFor="apellido" className="block text-sm font-medium text-cadeco-dark mb-2">
                Apellido *
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                required
                value={formData.apellido}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                placeholder="Pérez"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cadeco-dark mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                placeholder="juan@email.com"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-cadeco-dark mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                required
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                placeholder="+593 XXX XXX XXX"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="empresa" className="block text-sm font-medium text-cadeco-dark mb-2">
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                placeholder="Empresa actual"
              />
            </div>

            <div>
              <label htmlFor="puesto" className="block text-sm font-medium text-cadeco-dark mb-2">
                Puesto
              </label>
              <input
                type="text"
                id="puesto"
                name="puesto"
                value={formData.puesto}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                placeholder="Puesto actual"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="mensaje" className="block text-sm font-medium text-cadeco-dark mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
              placeholder="Cuéntanos sobre tu experiencia..."
            ></textarea>
          </div>

          <div className="mb-6">
            <label htmlFor="carta" className="block text-sm font-medium text-cadeco-dark mb-2">
              Carta de presentación
            </label>
            <textarea
              id="carta"
              name="carta"
              rows={6}
              value={formData.carta}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
              placeholder="¿Por qué te gustaría trabajar con nosotros?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors text-lg"
            style={{ backgroundColor: 'rgb(213, 52, 3)' }}
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
