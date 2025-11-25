import bcrypt from 'bcryptjs';

// Verificar credenciales de admin
export async function verifyAdmin(username: string, password: string): Promise<boolean> {
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
  const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

  if (username !== ADMIN_USERNAME) {
    return false;
  }

  if (!ADMIN_PASSWORD_HASH) {
    console.error('ADMIN_PASSWORD_HASH no está configurado');
    return false;
  }

  try {
    return await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
  } catch (error) {
    console.error('Error verificando password:', error);
    return false;
  }
}

// Generar hash de password (utilidad para crear nuevos hashes)
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}
