import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('email');
    t.nonNull.string('name');
    t.nonNull.int('roleId');
    t.field('role', {
      type: 'Role',
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.user
          .findUnique({
            where: { id: parent.id || undefined }
          })
          .role();
      }
    });
    t.nonNull.field('createdAt', { type: 'DateTime' });
  }
});
