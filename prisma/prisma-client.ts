import { PrismaClient } from '@prisma/client';

const prismaClientSingletion = () => {
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingletion>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingletion();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
