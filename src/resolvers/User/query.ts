import { nonNull, queryField } from 'nexus';

export const getUserById = queryField('getById', {
  type: 'User',
  args: { id: nonNull('Int') },
  description: 'get a user by id',
  resolve: async (_, { id }, { prisma }) => {
    return await prisma.user.findUnique({ where: { id } });
  }
});
