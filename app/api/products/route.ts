import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const PRODUCTS_FILE = path.join(process.cwd(), 'data', 'products.json');
const BACKUP_DIR = path.join(process.cwd(), 'data', 'backups');

// Crear backup antes de modificar
async function createBackup() {
  try {
    await fs.mkdir(BACKUP_DIR, { recursive: true });
    const data = await fs.readFile(PRODUCTS_FILE, 'utf-8');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFile = path.join(BACKUP_DIR, `products-${timestamp}.json`);
    await fs.writeFile(backupFile, data);
  } catch (error) {
    console.error('Error creating backup:', error);
  }
}

// GET - Listar productos con paginación
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');

    const data = await fs.readFile(PRODUCTS_FILE, 'utf-8');
    const productsData = JSON.parse(data);

    let products = Object.values(productsData.products);

    // Filtrar por categoría
    if (category) {
      products = products.filter((p: any) => p.categoryId === category);
    }

    // Filtrar por destacados
    if (featured === 'true') {
      products = products.filter((p: any) => p.featured);
    }

    // Paginación
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = products.slice(startIndex, endIndex);

    return NextResponse.json({
      products: paginatedProducts,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(products.length / limit),
        totalProducts: products.length,
        hasNextPage: endIndex < products.length,
        hasPrevPage: page > 1
      },
      categories: productsData.categories
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener productos' },
      { status: 500 }
    );
  }
}

// POST - Crear nuevo producto
export async function POST(request: NextRequest) {
  try {
    await createBackup();

    const newProduct = await request.json();
    const data = await fs.readFile(PRODUCTS_FILE, 'utf-8');
    const productsData = JSON.parse(data);

    // Generar ID único
    const productId = newProduct.slug || `product-${Date.now()}`;

    // Validar que no exista
    if (productsData.products[productId]) {
      return NextResponse.json(
        { error: 'El producto ya existe' },
        { status: 400 }
      );
    }

    // Agregar producto
    productsData.products[productId] = {
      id: productId,
      ...newProduct
    };

    // Actualizar contador de productos
    productsData.metadata.totalProducts = Object.keys(productsData.products).length;
    productsData.metadata.lastUpdated = new Date().toISOString().split('T')[0];

    // Guardar
    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(productsData, null, 2));

    return NextResponse.json({
      message: 'Producto creado exitosamente',
      product: productsData.products[productId]
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Error al crear producto' },
      { status: 500 }
    );
  }
}
