import { NextRequest, NextResponse } from 'next/server';
import { createUser, hasUsers } from '@/lib/users';

export async function POST(request: NextRequest) {
  try {
    const { username, password, confirmPassword, registrationEnabled } = await request.json();

    // Validaciones
    if (!username || !password || !confirmPassword) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: 'Las contraseñas no coinciden' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'La contraseña debe tener al menos 6 caracteres' },
        { status: 400 }
      );
    }

    if (username.length < 3) {
      return NextResponse.json(
        { error: 'El usuario debe tener al menos 3 caracteres' },
        { status: 400 }
      );
    }

    // Verificar si el registro está habilitado
    // Si no hay usuarios, permitir el primer registro (usuario inicial)
    const usersExist = await hasUsers();
    if (usersExist && !registrationEnabled) {
      return NextResponse.json(
        { error: 'El registro de usuarios está deshabilitado' },
        { status: 403 }
      );
    }

    try {
      const user = await createUser(username, password, 'admin');

      return NextResponse.json({
        message: 'Usuario creado exitosamente',
        user: {
          id: user.id,
          username: user.username,
          role: user.role
        }
      }, { status: 201 });
    } catch (error: any) {
      return NextResponse.json(
        { error: error.message || 'Error al crear usuario' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error en registro:', error);
    return NextResponse.json(
      { error: 'Error en el servidor' },
      { status: 500 }
    );
  }
}

// Verificar si hay usuarios o si el registro está habilitado
export async function GET() {
  try {
    const usersExist = await hasUsers();

    return NextResponse.json({
      hasUsers: usersExist,
      registrationAllowed: !usersExist // Solo permitir si no hay usuarios
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al verificar estado de registro' },
      { status: 500 }
    );
  }
}
