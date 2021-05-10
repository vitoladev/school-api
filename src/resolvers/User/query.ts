import { extendType, nonNull } from 'nexus';

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('users', {
      type: 'User',
      description: 'get all users',
      async resolve(_, __, { prisma }) {
        return await prisma.user.findMany();
      }
    });

    t.field('userById', {
      type: 'User',
      args: { id: nonNull('Int') },
      description: 'get a user by id',
      async resolve(_, { id }, { prisma }) {
        return await prisma.user.findUnique({ where: { id } });
      }
    });
  }
});
