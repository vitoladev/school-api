import { PrismaClient } from '@prisma/client';

const seedUsers = async (prisma: PrismaClient) => {
  const student = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      email: 'student@email.com',
      name: 'Bob',
      roleId: 1
    }
  });

  const teacher = await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      email: 'teacher@email.com',
      name: 'Joe',
      roleId: 2
    }
  });

  console.log({ student, teacher });
};

export default seedUsers;
