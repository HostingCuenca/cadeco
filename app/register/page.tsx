"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { UserPlus, Lock } from "lucide-react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [registrationAllowed, setRegistrationAllowed] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkRegistrationStatus();
  }, []);

  const checkRegistrationStatus = async () => {
    try {
      const response = await fetch("/api/auth/register");
      const data = await response.json();
      setRegistrationAllowed(data.registrationAllowed);

      if (data.hasUsers && !data.registrationAllowed) {
        setError("El registro está deshabilitado. Solo el administrador puede crear usuarios.");
      }
    } catch (err) {
      setError("Error al verificar estado de registro");
    } finally {
      setCheckingStatus(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          confirmPassword,
          registrationEnabled: false // Por seguridad
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Error al registrar usuario");
        setLoading(false);
        return;
      }

      setSuccess("Usuario creado exitosamente! Redirigiendo al login...");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  if (checkingStatus) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cadeco-gray">
        <div className="text-center">
          <p className="text-gray-600">Verificando estado de registro...</p>
        </div>
      </div>
    );
  }

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
          <h1 className="text-2xl font-light text-cadeco-dark mb-2">
            Crear Cuenta de Administrador
          </h1>
          {registrationAllowed && (
            <p className="text-sm text-gray-600">
              Crea tu primera cuenta de administrador
            </p>
          )}
        </div>

        {!registrationAllowed ? (
          <div className="text-center py-8">
            <Lock className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-light text-cadeco-dark mb-2">
              Registro Deshabilitado
            </h2>
            <p className="text-gray-600 mb-6">
              Ya existe un usuario administrador. El registro está deshabilitado por seguridad.
            </p>
            <button
              onClick={() => router.push("/login")}
              className="px-6 py-3 bg-cadeco-orange text-white hover:bg-cadeco-orange-light transition-colors"
            >
              Ir al Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                {success}
              </div>
            )}

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-cadeco-dark mb-2"
              >
                Usuario *
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                required
                minLength={3}
                placeholder="Mínimo 3 caracteres"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-cadeco-dark mb-2"
              >
                Contraseña *
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                required
                minLength={6}
                placeholder="Mínimo 6 caracteres"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-cadeco-dark mb-2"
              >
                Confirmar Contraseña *
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-cadeco-orange focus:border-transparent"
                required
                minLength={6}
                placeholder="Repite la contraseña"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 bg-cadeco-orange text-white font-medium hover:bg-cadeco-orange-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <UserPlus size={20} />
              {loading ? "Creando cuenta..." : "Crear Cuenta"}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="text-sm text-cadeco-orange hover:text-cadeco-orange-light"
              >
                ¿Ya tienes cuenta? Iniciar sesión
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
