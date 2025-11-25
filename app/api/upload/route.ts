import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const category = formData.get('category') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No se proporcionó ningún archivo' },
        { status: 400 }
      );
    }

    if (!category) {
      return NextResponse.json(
        { error: 'No se proporcionó la categoría' },
        { status: 400 }
      );
    }

    // Validar tipo de archivo
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Tipo de archivo no permitido. Solo JPG, PNG y WebP' },
        { status: 400 }
      );
    }

    // Crear buffer del archivo
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generar nombre único
    const timestamp = Date.now();
    const originalName = file.name.replace(/\s+/g, '-');
    const fileName = `${timestamp}-${originalName}`;

    // Crear directorio si no existe
    const uploadDir = path.join(process.cwd(), 'public', 'productos', category);
    await mkdir(uploadDir, { recursive: true });

    // Optimizar imagen con sharp
    const optimizedBuffer = await sharp(buffer)
      .resize(1200, 1200, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: 85 })
      .toBuffer();

    // Guardar archivo
    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, optimizedBuffer);

    // Retornar URL pública
    const publicUrl = `/productos/${category}/${fileName}`;

    return NextResponse.json({
      message: 'Imagen subida exitosamente',
      url: publicUrl,
      filename: fileName
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Error al subir la imagen' },
      { status: 500 }
    );
  }
}
