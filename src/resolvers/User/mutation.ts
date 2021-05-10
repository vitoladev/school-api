import { arg, extendType, intArg, nonNull, stringArg } from 'nexus';

export const UserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createUser', {
      type: 'User',
      description: 'creates a new user',
      args: {
        createUserInput: nonNull(arg({ type: 'CreateUserInput' }))
      },
      async resolve(_, { createUserInput }, { prisma }) {
        return await prisma.user.create({
          data: {
            name: createUserInput.name,
            email: createUserInput.email,
            roleId: createUserInput.roleId
          }
        });
      }
    });

    t.nonNull.field('updateUser', {
      type: 'User',
      description: 'updates a user',
      args: {
        updateUserInput: nonNull(arg({ type: 'UpdateUserInput' }))
      },
      async resolve(_, { updateUserInput }, { prisma }) {
        return await prisma.user.update({
          where: { id: updateUserInput.id },
          data: {
            name: updateUserInput.name,
            email: updateUserInput.email,
            roleId: updateUserInput.roleId
          }
        });
      }
    });
  }
});
