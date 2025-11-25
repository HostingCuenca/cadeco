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

// GET - Listar proyectos con paginación
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const featured = searchParams.get('featured');

    const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
    const projectsData = JSON.parse(data);

    let projects = Object.values(projectsData.projects);

    // Filtrar por destacados
    if (featured === 'true') {
      projects = projects.filter((p: any) => p.featured);
    }

    // Paginación
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProjects = projects.slice(startIndex, endIndex);

    return NextResponse.json({
      projects: paginatedProjects,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(projects.length / limit),
        totalProjects: projects.length,
        hasNextPage: endIndex < projects.length,
        hasPrevPage: page > 1
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener proyectos' },
      { status: 500 }
    );
  }
}

// POST - Crear nuevo proyecto
export async function POST(request: NextRequest) {
  try {
    await createBackup();

    const newProject = await request.json();
    const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
    const projectsData = JSON.parse(data);

    // Generar ID único
    const projectId = newProject.slug || `project-${Date.now()}`;

    // Validar que no exista
    if (projectsData.projects[projectId]) {
      return NextResponse.json(
        { error: 'El proyecto ya existe' },
        { status: 400 }
      );
    }

    // Agregar proyecto
    projectsData.projects[projectId] = {
      id: projectId,
      ...newProject
    };

    // Actualizar contador
    projectsData.metadata.totalProjects = Object.keys(projectsData.projects).length;
    projectsData.metadata.lastUpdated = new Date().toISOString().split('T')[0];

    // Guardar
    await fs.writeFile(PROJECTS_FILE, JSON.stringify(projectsData, null, 2));

    return NextResponse.json({
      message: 'Proyecto creado exitosamente',
      project: projectsData.projects[projectId]
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Error al crear proyecto' },
      { status: 500 }
    );
  }
}
