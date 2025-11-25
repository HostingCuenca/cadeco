import { NextRequest, NextResponse } from 'next/server';
import { verifyCredentials } from '@/lib/users';
import { sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'tu-secreto-super-secreto-cambialo-en-produccion';

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return NextResponse.json(
        { error: 'Datos inválidos en la petición' },
        { status: 400 }
      );
    }

    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Usuario y contraseña son requeridos' },
        { status: 400 }
      );
    }

    const user = await verifyCredentials(username, password);

    if (!user) {
      return NextResponse.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Crear token JWT
    const token = sign(
      { username: user.username, role: user.role, userId: user.id },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Crear respuesta con cookie
    const response = NextResponse.json({
      message: 'Login exitoso',
      user: {
        username: user.username,
        role: user.role,
        id: user.id
      }
    });

    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 24 horas
    });

    return response;
  } catch (error) {
    console.error('Error en login:', error);
    return NextResponse.json(
      { error: 'Error en el servidor' },
      { status: 500 }
    );
  }
}
