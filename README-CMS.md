# Sistema CMS de Gestión de Productos - Cadeco Global

Sistema completo de gestión de contenido (CMS) para administrar productos, similar a WordPress, implementado en Next.js.

## Características Principales

### ✅ Panel de Administración
- CRUD completo de productos (Crear, Leer, Actualizar, Eliminar)
- Gestión de categorías
- Sistema de autenticación seguro
- Interfaz intuitiva y responsive

### ✅ Gestión de Imágenes
- Subida de imágenes directa al servidor
- Optimización automática con Sharp
- Redimensionamiento inteligente (máx. 1200x1200px)
- Almacenamiento organizado por categorías en `/public/productos/`

### ✅ Sistema de Datos
- Persistencia en archivo JSON (`data/products.json`)
- Backups automáticos antes de cada modificación
- Validación de datos
- Actualización en tiempo real

### ✅ Paginación
- Frontend con controles de navegación
- Backend con filtros y límites configurables
- Lazy loading de productos

## Estructura del Sistema

```
cadeco/
├── app/
│   ├── admin/              # Panel de administración
│   │   └── page.tsx        # Interfaz CRUD completa
│   ├── login/              # Página de login
│   │   └── page.tsx
│   ├── api/
│   │   ├── products/       # API de productos
│   │   │   ├── route.ts    # GET (listar), POST (crear)
│   │   │   └── [id]/
│   │   │       └── route.ts # GET, PUT, DELETE por ID
│   │   ├── categories/     # API de categorías
│   │   │   └── route.ts
│   │   ├── upload/         # API de subida de imágenes
│   │   │   └── route.ts
│   │   └── auth/           # API de autenticación
│   │       ├── login/
│   │       └── logout/
│   └── components/
│       └── ProductList.tsx # Componente con paginación
├── lib/
│   └── auth.ts            # Utilidades de autenticación
├── data/
│   ├── products.json      # Base de datos de productos
│   └── backups/           # Backups automáticos (generados)
├── public/
│   └── productos/         # Imágenes organizadas por categoría
├── middleware.ts          # Protección de rutas admin
└── .env.local            # Configuración (credenciales)
```

## Acceso al Sistema

### Credenciales por Defecto
```
URL: http://localhost:3000/login
Usuario: admin
Contraseña: cadeco2024
```

**⚠️ IMPORTANTE:** Cambia estas credenciales en producción.

## Cómo Usar el Panel de Administración

### 1. Iniciar Sesión
1. Ve a `http://localhost:3000/login`
2. Ingresa las credenciales
3. Serás redirigido al panel de administración

### 2. Crear un Producto
1. Click en "Crear Producto"
2. Completa el formulario:
   - **Nombre**: Nombre del producto
   - **Slug**: ID único (se genera automáticamente del nombre)
   - **Categoría**: Selecciona una categoría existente
   - **Tipo**: Tipo de producto (ej: "Mortero Adhesivo")
   - **Descripción Corta**: Descripción breve para listados
   - **Peso/Presentación**: Ej: "20kg", "2.2kg"
   - **Imagen**: Sube una imagen (JPG, PNG, WebP)
   - **Destacado**: Marca si quieres destacarlo en la página principal
3. Click en "Guardar"

### 3. Editar un Producto
1. Click en el ícono de edición (lápiz) del producto
2. Modifica los campos necesarios
3. Puedes cambiar la imagen subiendo una nueva
4. Click en "Guardar"

### 4. Eliminar un Producto
1. Click en el ícono de basura
2. Confirma la eliminación
3. El producto se eliminará del sistema

### 5. Filtrar Productos
- Usa el selector de categorías en la parte superior
- La lista se actualizará automáticamente

### 6. Navegar entre Páginas
- Usa los botones "Anterior" y "Siguiente"
- O selecciona el número de página directamente

## API Endpoints

### Productos

#### GET /api/products
Listar productos con paginación y filtros
```javascript
// Ejemplos:
/api/products?page=1&limit=12
/api/products?category=morteros-adhesivos
/api/products?featured=true
```

#### POST /api/products
Crear nuevo producto
```javascript
{
  "slug": "producto-nuevo",
  "name": "Producto Nuevo",
  "categoryId": "morteros-adhesivos",
  "type": "Mortero Adhesivo",
  "featured": false,
  "images": {
    "main": "/productos/categoria/imagen.jpg"
  },
  "overview": {
    "shortDescription": "Descripción corta"
  },
  "packaging": {
    "weight": "20kg"
  }
}
```

#### GET /api/products/[id]
Obtener producto específico

#### PUT /api/products/[id]
Actualizar producto

#### DELETE /api/products/[id]
Eliminar producto

### Imágenes

#### POST /api/upload
Subir imagen
```javascript
FormData {
  file: File,
  category: "morteros-adhesivos"
}
```

Respuesta:
```javascript
{
  "message": "Imagen subida exitosamente",
  "url": "/productos/morteros-adhesivos/1234567890-imagen.jpg",
  "filename": "1234567890-imagen.jpg"
}
```

### Categorías

#### GET /api/categories
Listar todas las categorías

#### POST /api/categories
Crear nueva categoría

### Autenticación

#### POST /api/auth/login
Login con credenciales
```javascript
{
  "username": "admin",
  "password": "cadeco2024"
}
```

#### POST /api/auth/logout
Cerrar sesión

## Sistema de Backups

El sistema crea automáticamente un backup del archivo `products.json` antes de cada modificación:

- **Ubicación**: `data/backups/`
- **Formato**: `products-YYYY-MM-DDTHH-MM-SS-mmmZ.json`
- **Cuándo**: Antes de POST, PUT o DELETE

Para restaurar un backup:
```bash
cp data/backups/products-2024-11-20T15-30-00-000Z.json data/products.json
```

## Configuración de Seguridad

### Cambiar Contraseña del Admin

1. **Generar nuevo hash:**
```bash
node scripts/generate-hash.js
```

2. **Modificar `.env.local`:**
```env
ADMIN_USERNAME=tu_usuario
ADMIN_PASSWORD_HASH=hash_generado
NEXTAUTH_SECRET=cambia-este-secreto-en-produccion
```

### Protección de Rutas
- Middleware en `middleware.ts` protege `/admin/*`
- Requiere JWT válido en cookie `admin_token`
- Token expira en 24 horas

## Optimización de Imágenes

Las imágenes se optimizan automáticamente con Sharp:
- **Formato**: Convertidas a JPEG
- **Tamaño máximo**: 1200x1200px (mantiene proporción)
- **Calidad**: 85%
- **Sin agrandamiento**: No aumenta tamaño de imágenes pequeñas

## Integración con el Frontend

Para usar el sistema de paginación en tu página principal:

```tsx
import ProductList from "@/app/components/ProductList";

// En tu componente
<ProductList
  categoryId="morteros-adhesivos"
  categoryName="Morteros y Adhesivos"
  initialProducts={productos}
/>
```

## Solución de Problemas

### Error: "Credenciales inválidas"
- Verifica que el hash en `.env.local` sea correcto
- Regenera el hash con el script `generate-hash.js`

### Error: "No se puede subir imagen"
- Verifica que seleccionaste una categoría primero
- Comprueba que el formato sea JPG, PNG o WebP
- Revisa permisos de escritura en `/public/productos/`

### Error: "Token inválido"
- La sesión expiró, vuelve a iniciar sesión
- Verifica que `NEXTAUTH_SECRET` esté configurado

### Productos no se actualizan
- Verifica que `data/products.json` tenga permisos de escritura
- Revisa los logs del servidor
- Comprueba que haya espacio en disco

## Comandos Útiles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Generar nuevo hash de contraseña
node scripts/generate-hash.js

# Ver backups
ls data/backups/

# Restaurar backup
cp data/backups/[archivo].json data/products.json
```

## Próximas Mejoras Sugeridas

- [ ] Editor WYSIWYG para descripciones largas
- [ ] Gestión de múltiples imágenes por producto
- [ ] Exportación de productos a Excel/CSV
- [ ] Importación masiva de productos
- [ ] Sistema de roles (admin, editor, visualizador)
- [ ] Historial de cambios por producto
- [ ] Búsqueda avanzada con filtros
- [ ] Preview de cómo se verá el producto en el sitio

## Soporte

Para problemas o dudas sobre el sistema CMS, contacta al equipo de desarrollo.

---

**Cadeco Global** - Sistema de Gestión de Productos v1.0
