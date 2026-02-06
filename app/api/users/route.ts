// app/api/users/route.ts
import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        fullName: true,
        createdAt: true,
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.error('GET /api/users:', error);
    return NextResponse.json({ error: 'Ошибка при получении пользователей' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { fullName, email, password } = data;

    // Валидация
    if (!fullName?.trim() || !email?.trim() || !password?.trim()) {
      return NextResponse.json({ error: 'Нужны поля: fullName, email, password' }, { status: 400 });
    }

    // Хэширование пароля (установите bcrypt: npm install bcrypt @types/bcrypt)
    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        fullName: true,
        createdAt: true,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    console.error('POST /api/users:', error);

    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Пользователь с таким email уже существует' },
        { status: 409 },
      );
    }

    return NextResponse.json({ error: 'Ошибка при создании пользователя' }, { status: 500 });
  }
}
