import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const PROJECTS_FILE = path.join(process.cwd(), 'data', 'projects.json');
const BACKUP_DIR = path.join(process.cwd(), 'data', 'backups');

async function createBackup() {
  try {
    await fs.mkdir(BACKUP_DIR, { recursive: true });
    const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFile = path.join(BACKUP_DIR, `projects-${timestamp}.json`);
    await fs.writeFile(backupFile, data);
  } catch (error) {
    console.error('Error creating backup:', error);
  }
}

// GET - Obtener proyecto por ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
    const projectsData = JSON.parse(data);
    const project = projectsData.projects[id];

    if (!project) {
      return NextResponse.json(
        { error: 'Proyecto no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({ project });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener proyecto' },
      { status: 500 }
    );
  }
}

// PUT - Actualizar proyecto
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await createBackup();

    const updates = await request.json();
    const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
    const projectsData = JSON.parse(data);

    if (!projectsData.projects[id]) {
      return NextResponse.json(
        { error: 'Proyecto no encontrado' },
        { status: 404 }
      );
    }

    // Actualizar proyecto
    projectsData.projects[id] = {
      ...projectsData.projects[id],
      ...updates,
      id: id
    };

    // Actualizar metadata
    projectsData.metadata.lastUpdated = new Date().toISOString().split('T')[0];

    // Guardar
    await fs.writeFile(PROJECTS_FILE, JSON.stringify(projectsData, null, 2));

    return NextResponse.json({
      message: 'Proyecto actualizado exitosamente',
      project: projectsData.projects[id]
    });
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      { error: 'Error al actualizar proyecto' },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar proyecto
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await createBackup();

    const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
    const projectsData = JSON.parse(data);

    if (!projectsData.projects[id]) {
      return NextResponse.json(
        { error: 'Proyecto no encontrado' },
        { status: 404 }
      );
    }

    // Eliminar proyecto
    delete projectsData.projects[id];

    // Actualizar metadata
    projectsData.metadata.totalProjects = Object.keys(projectsData.projects).length;
    projectsData.metadata.lastUpdated = new Date().toISOString().split('T')[0];

    // Guardar
    await fs.writeFile(PROJECTS_FILE, JSON.stringify(projectsData, null, 2));

    return NextResponse.json({
      message: 'Proyecto eliminado exitosamente'
    });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      { error: 'Error al eliminar proyecto' },
      { status: 500 }
    );
  }
}
