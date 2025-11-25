import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const PRODUCTS_FILE = path.join(process.cwd(), 'data', 'products.json');

// GET - Listar todas las categorías
export async function GET() {
  try {
    const data = await fs.readFile(PRODUCTS_FILE, 'utf-8');
    const productsData = JSON.parse(data);

    return NextResponse.json({
      categories: productsData.categories
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener categorías' },
      { status: 500 }
    );
  }
}

// POST - Crear nueva categoría
export async function POST(request: NextRequest) {
  try {
    const newCategory = await request.json();
    const data = await fs.readFile(PRODUCTS_FILE, 'utf-8');
    const productsData = JSON.parse(data);

    // Validar que no exista
    const exists = productsData.categories.find((c: any) => c.id === newCategory.id);
    if (exists) {
      return NextResponse.json(
        { error: 'La categoría ya existe' },
        { status: 400 }
      );
    }

    // Agregar categoría
    productsData.categories.push(newCategory);
    productsData.metadata.totalCategories = productsData.categories.length;
    productsData.metadata.lastUpdated = new Date().toISOString().split('T')[0];

    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(productsData, null, 2));

    return NextResponse.json({
      message: 'Categoría creada exitosamente',
      category: newCategory
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear categoría' },
      { status: 500 }
    );
  }
}
