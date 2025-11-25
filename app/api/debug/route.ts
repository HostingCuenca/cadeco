import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasUsername: !!process.env.ADMIN_USERNAME,
    hasPasswordHash: !!process.env.ADMIN_PASSWORD_HASH,
    hasSecret: !!process.env.NEXTAUTH_SECRET,
    username: process.env.ADMIN_USERNAME,
    hashLength: process.env.ADMIN_PASSWORD_HASH?.length || 0,
    hashPrefix: process.env.ADMIN_PASSWORD_HASH?.substring(0, 10)
  });
}
