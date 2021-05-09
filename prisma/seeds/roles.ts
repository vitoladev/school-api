import { PrismaClient } from '@prisma/client';

const seedRoles = async (prisma: PrismaClient) => {
  const student = await prisma.role.upsert({
    where: { id: 1 },
    update: {},
    create: {
      description: 'Student'
    }
  });

  const teacher = await prisma.role.upsert({
    where: { id: 2 },
    update: {},
    create: {
      description: 'Teacher'
    }
  });

  console.log({ student, teacher });
};

export default seedRoles;
