"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    console.log('[LOGIN] Iniciando login...');

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include' // Importante para cookies
      });

      console.log('[LOGIN] Response status:', response.status);
      console.log('[LOGIN] Response headers:', response.headers);

      const data = await response.json();
      console.log('[LOGIN] Response data:', data);

      if (!response.ok) {
        console.error('[LOGIN] Error en response:', data);
        setError(data.error || "Error al iniciar sesión");
        setLoading(false);
        return;
      }

      console.log('[LOGIN] Login exitoso, redirigiendo a /admin...');
      console.log('[LOGIN] Cookies antes de redirigir:', document.cookie);

      // Login exitoso - redirigir con window.location para forzar recarga
      setTimeout(() => {
        console.log('[LOGIN] Ejecutando redirección...');
        window.location.href = "/admin";
      }, 100);
    } catch (err) {
      console.error('[LOGIN] Error catch:', err);
      setError("Error de conexión");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cadeco-gray">
      <div className="max-w-md w-full bg-white shadow-2xl p-8">
        <div className="mb-8 text-center">
          <div className="relative w-48 h-16 mx-auto mb-4">
            <Image
              src="/logoprincipal-letrasblancas.png"
              alt="Cadeco Global"
              fill
              className="object-contain brightness-0"
            />
          </div>
          <h1 className="text-2xl font-light text-cadeco-dark">
            Panel de Administración
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-cadeco-dark mb-2"
            >
              Usuario
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-cadeco-dark mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/register")}
            className="text-sm text-cadeco-orange hover:text-cadeco-orange-light"
          >
            ¿No tienes cuenta? Crear primera cuenta de administrador
          </button>
        </div>
      </div>
    </div>
  );
}
