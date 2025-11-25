import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const PRODUCTS_FILE = path.join(process.cwd(), 'data', 'products.json');
const BACKUP_DIR = path.join(process.cwd(), 'data', 'backups');

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

// GET - Obtener producto por ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await fs.readFile(PRODUCTS_FILE, 'utf-8');
    const productsData = JSON.parse(data);
    const product = productsData.products[id];

    if (!product) {
      return NextResponse.json(
        { error: 'Producto no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({ product });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener producto' },
      { status: 500 }
    );
  }
}

// PUT - Actualizar producto
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await createBackup();

    const updates = await request.json();
    const data = await fs.readFile(PRODUCTS_FILE, 'utf-8');
    const productsData = JSON.parse(data);

    if (!productsData.products[id]) {
      return NextResponse.json(
        { error: 'Producto no encontrado' },
        { status: 404 }
      );
    }

    // Actualizar producto
    productsData.products[id] = {
      ...productsData.products[id],
      ...updates,
      id: id // Mantener ID original
    };

    // Actualizar metadata
    productsData.metadata.lastUpdated = new Date().toISOString().split('T')[0];

    // Guardar
    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(productsData, null, 2));

    return NextResponse.json({
      message: 'Producto actualizado exitosamente',
      product: productsData.products[id]
    });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Error al actualizar producto' },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar producto
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await createBackup();

    const data = await fs.readFile(PRODUCTS_FILE, 'utf-8');
    const productsData = JSON.parse(data);

    if (!productsData.products[id]) {
      return NextResponse.json(
        { error: 'Producto no encontrado' },
        { status: 404 }
      );
    }

    // Eliminar producto
    delete productsData.products[id];

    // Actualizar metadata
    productsData.metadata.totalProducts = Object.keys(productsData.products).length;
    productsData.metadata.lastUpdated = new Date().toISOString().split('T')[0];

    // Guardar
    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(productsData, null, 2));

    return NextResponse.json({
      message: 'Producto eliminado exitosamente'
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Error al eliminar producto' },
      { status: 500 }
    );
  }
}
