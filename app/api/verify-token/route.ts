import { NextRequest, NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'tu-secreto-super-secreto-cambialo-en-produccion';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value;

  if (!token) {
    return NextResponse.json({
      error: 'No token found',
      hasToken: false
    });
  }

  try {
    const decoded = verify(token, JWT_SECRET);
    return NextResponse.json({
      valid: true,
      decoded,
      token: token.substring(0, 50) + '...'
    });
  } catch (error: any) {
    return NextResponse.json({
      valid: false,
      error: error.message,
      token: token.substring(0, 50) + '...'
    });
  }
}
