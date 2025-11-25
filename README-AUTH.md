# Sistema de Autenticación y Registro - Cadeco CMS

## Descripción

Sistema completo de autenticación con registro de usuarios almacenado en archivo JSON. El registro se deshabilita automáticamente después de crear el primer usuario para máxima seguridad.

## Características

### ✅ Registro Inteligente
- **Primer usuario**: El registro está habilitado SOLO si no hay usuarios en el sistema
- **Auto-bloqueo**: Después de crear el primer usuario, el registro se deshabilita automáticamente
- **Validaciones**:
  - Usuario mínimo 3 caracteres
  - Contraseña mínimo 6 caracteres
  - Confirmación de contraseña
  - Usuario único (no duplicados)

### ✅ Login Seguro
- Verificación con bcrypt
- JWT con cookies HttpOnly
- Tokens con expiración de 24 horas
- Protección de rutas con middleware

### ✅ Almacenamiento
- Usuarios en `data/users.json`
- Contraseñas hasheadas con bcrypt (10 rounds)
- No se usan variables de entorno (evita problemas con caracteres especiales)

## Flujo de Uso

### Primera Vez (Sin usuarios)

1. **Ir a Login**: `http://localhost:3000/login`
2. **Click en "¿No tienes cuenta? Crear primera cuenta de administrador"**
3. **Ir a Registro**: `http://localhost:3000/register`
4. **Completar formulario**:
   - Usuario: admin (o el que prefieras)
   - Contraseña: cadeco2024 (o la que prefieras)
   - Confirmar contraseña
5. **Click en "Crear Cuenta"**
6. **Serás redirigido automáticamente al login**

### Después del Primer Usuario

1. **Ir a Login**: `http://localhost:3000/login`
2. **El enlace de registro seguirá visible** (para acceso directo)
3. **Página de registro mostrará**: "Registro Deshabilitado"
4. **Solo login disponible**

## Endpoints API

### GET /api/auth/register
Verificar estado del registro

**Respuesta (sin usuarios):**
```json
{
  "hasUsers": false,
  "registrationAllowed": true
}
```

**Respuesta (con usuarios):**
```json
{
  "hasUsers": true,
  "registrationAllowed": false
}
```

### POST /api/auth/register
Crear nuevo usuario (solo si no hay usuarios)

**Request:**
```json
{
  "username": "admin",
  "password": "cadeco2024",
  "confirmPassword": "cadeco2024",
  "registrationEnabled": false
}
```

**Respuesta exitosa (201):**
```json
{
  "message": "Usuario creado exitosamente",
  "user": {
    "id": "user-1234567890",
    "username": "admin",
    "role": "admin"
  }
}
```

**Respuesta error (403) - Registro bloqueado:**
```json
{
  "error": "El registro de usuarios está deshabilitado"
}
```

**Respuesta error (400) - Usuario ya existe:**
```json
{
  "error": "El usuario ya existe"
}
```

### POST /api/auth/login
Iniciar sesión

**Request:**
```json
{
  "username": "admin",
  "password": "cadeco2024"
}
```

**Respuesta exitosa (200):**
```json
{
  "message": "Login exitoso",
  "user": {
    "username": "admin",
    "role": "admin",
    "id": "user-1234567890"
  }
}
```

**Respuesta error (401):**
```json
{
  "error": "Credenciales inválidas"
}
```

### POST /api/auth/logout
Cerrar sesión

**Respuesta:**
```json
{
  "message": "Logout exitoso"
}
```

## Estructura de Datos

### data/users.json
```json
{
  "users": [
    {
      "id": "user-1763760241316",
      "username": "admin",
      "passwordHash": "$2b$10$xF8GogHw6cw6LcTGfhZW5utKau1XzTcJfq.8vHe1UopVDtwOhjkLi",
      "role": "admin",
      "createdAt": "2025-11-21T21:24:01.316Z"
    }
  ]
}
```

## Pruebas con cURL

### 1. Verificar estado de registro
```bash
curl http://localhost:3000/api/auth/register
```

### 2. Crear primer usuario
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"cadeco2024","confirmPassword":"cadeco2024","registrationEnabled":false}'
```

### 3. Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"cadeco2024"}' \
  -v
```

### 4. Intentar registrar otro usuario (debe fallar)
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"otro","password":"123456","confirmPassword":"123456","registrationEnabled":false}'
```

## Gestión de Usuarios

### Ver usuarios actuales
```bash
cat data/users.json
```

### Eliminar todos los usuarios (resetear sistema)
```bash
echo '{"users":[]}' > data/users.json
```

Después de esto, el registro se habilitará automáticamente para crear el primer usuario.

### Crear usuario manualmente desde Node.js
```javascript
const bcrypt = require('bcryptjs');

async function createUser() {
  const password = 'tu_password';
  const hash = await bcrypt.hash(password, 10);

  const user = {
    id: `user-${Date.now()}`,
    username: 'tu_usuario',
    passwordHash: hash,
    role: 'admin',
    createdAt: new Date().toISOString()
  };

  console.log(JSON.stringify(user, null, 2));
}

createUser();
```

## Seguridad

### ✅ Implementado
- Contraseñas hasheadas con bcrypt (10 rounds)
- JWT con cookies HttpOnly (previene XSS)
- SameSite=strict (previene CSRF)
- Middleware de protección de rutas
- Auto-bloqueo de registro después del primer usuario
- Validación de longitud de contraseña
- No hay credenciales en variables de entorno

### 🔒 Recomendaciones para Producción
1. **HTTPS obligatorio** - Cambia `secure: false` a `secure: true` en cookies
2. **JWT Secret fuerte** - Cambia `NEXTAUTH_SECRET` en `.env.local`
3. **Rate limiting** - Implementa límite de intentos de login
4. **Logs de seguridad** - Registra intentos fallidos
5. **2FA opcional** - Para mayor seguridad
6. **Recuperación de contraseña** - Sistema de reset por email

## Habilitar Registro Nuevamente (Solo Administrador)

Si necesitas permitir el registro de más usuarios, tienes estas opciones:

### Opción 1: Variable de entorno (temporal)
Agregar en el código una validación con variable de entorno:
```typescript
// En register/route.ts
const ALLOW_REGISTRATION = process.env.ALLOW_REGISTRATION === 'true';

if (usersExist && !ALLOW_REGISTRATION) {
  // Bloquear
}
```

### Opción 2: Panel de administración
Crear una sección en `/admin` para:
- Ver usuarios existentes
- Crear nuevos usuarios (sin necesidad de registro público)
- Cambiar roles
- Eliminar usuarios

### Opción 3: API protegida
Crear endpoint `/api/admin/users` protegido con JWT admin:
```bash
# Crear usuario como admin
curl -X POST http://localhost:3000/api/admin/users \
  -H "Content-Type: application/json" \
  -H "Cookie: admin_token=TU_TOKEN" \
  -d '{"username":"nuevo","password":"123456","role":"editor"}'
```

## Solución de Problemas

### Error: "Credenciales inválidas"
- Verifica que el usuario existe en `data/users.json`
- Verifica que la contraseña sea correcta
- Revisa los logs del servidor

### Error: "El registro está deshabilitado"
- Normal si ya hay usuarios en el sistema
- Para habilitar, elimina todos los usuarios de `data/users.json`

### Error: "El usuario ya existe"
- El username ya está registrado
- Elige otro username

### No puedo acceder a /admin
- Verifica que hayas iniciado sesión
- La cookie debe estar presente
- El token debe ser válido (no expirado)

## Credenciales de Ejemplo

Después de seguir este README, tendrás:

```
Usuario: admin
Contraseña: cadeco2024
```

**⚠️ IMPORTANTE**: Cambia estas credenciales en producción.

---

**Cadeco Global** - Sistema de Autenticación v1.0
