import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

// Prisma не поддерживает Edge — явно используем Node.js
export const runtime = 'nodejs';

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error('GET /api/users:', error);
    return NextResponse.json(
      { error: 'Ошибка при получении пользователей' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  let data: { fullName?: string; email?: string; password?: string };
  try {
    const text = await req.text();
    if (!text || text.trim() === '') {
      return NextResponse.json(
        { error: 'Тело запроса пустое. Ожидается JSON: { fullName, email, password }' },
        { status: 400 }
      );
    }
    data = JSON.parse(text) as typeof data;
  } catch {
    return NextResponse.json(
      { error: 'Неверный JSON. Используйте двойные кавычки для ключей и строк.' },
      { status: 400 }
    );
  }

  const { fullName, email, password } = data;
  if (!fullName || !email || !password) {
    return NextResponse.json(
      { error: 'Нужны поля: fullName, email, password' },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.create({
      data: { fullName, email, password },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.error('POST /api/users:', error);
    return NextResponse.json(
      { error: 'Ошибка при создании пользователя' },
      { status: 500 }
    );
  }
}
