import { extendType, inputObjectType, intArg, nonNull, stringArg } from 'nexus';

export const UserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createUser', {
      type: 'User',
      args: {
        name: nonNull(stringArg()),
        email: nonNull(stringArg()),
        roleId: nonNull(intArg())
      },
      async resolve(_, { name, email, roleId }, { prisma }) {
        return await prisma.user.create({
          data: {
            name: name,
            email: email,
            roleId: roleId
          }
        });
      }
    });
  }
});
