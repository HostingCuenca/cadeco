import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// IMPORTANTE: En producción, cambiar este secret y usar variables de entorno
const JWT_SECRET = new TextEncoder().encode(
  process.env.NEXTAUTH_SECRET || 'tu-secreto-super-secreto-cambialo-en-produccion'
);

export async function middleware(request: NextRequest) {
  // Proteger rutas de admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      console.log('[Middleware] ❌ No token, redirecting to login');
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      console.log('[Middleware] ✅ Token valid for user:', payload.username);
      return NextResponse.next();
    } catch (error: any) {
      console.log('[Middleware] ❌ Invalid token:', error.message);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*']
};
