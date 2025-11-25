import fs from 'fs/promises';
import path from 'path';
import bcrypt from 'bcryptjs';

const USERS_FILE = path.join(process.cwd(), 'data', 'users.json');

export interface User {
  id: string;
  username: string;
  passwordHash: string;
  role: string;
  createdAt: string;
}

export interface UsersData {
  users: User[];
}

// Leer usuarios
export async function getUsers(): Promise<UsersData> {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return { users: [] };
  }
}

// Guardar usuarios
async function saveUsers(usersData: UsersData): Promise<void> {
  await fs.writeFile(USERS_FILE, JSON.stringify(usersData, null, 2));
}

// Buscar usuario por username
export async function findUserByUsername(username: string): Promise<User | null> {
  const usersData = await getUsers();
  return usersData.users.find(u => u.username === username) || null;
}

// Crear nuevo usuario
export async function createUser(username: string, password: string, role: string = 'admin'): Promise<User> {
  const usersData = await getUsers();

  // Verificar si ya existe
  const exists = usersData.users.find(u => u.username === username);
  if (exists) {
    throw new Error('El usuario ya existe');
  }

  // Crear hash de password
  const passwordHash = await bcrypt.hash(password, 10);

  const newUser: User = {
    id: `user-${Date.now()}`,
    username,
    passwordHash,
    role,
    createdAt: new Date().toISOString()
  };

  usersData.users.push(newUser);
  await saveUsers(usersData);

  return newUser;
}

// Verificar credenciales
export async function verifyCredentials(username: string, password: string): Promise<User | null> {
  const user = await findUserByUsername(username);
  if (!user) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    return null;
  }

  return user;
}

// Verificar si hay usuarios registrados
export async function hasUsers(): Promise<boolean> {
  const usersData = await getUsers();
  return usersData.users.length > 0;
}
