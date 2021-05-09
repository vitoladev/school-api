import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('email');
    t.string('string');
    t.nonNull.field('createdAt', { type: 'DateTime' });
    t.int('roleId');
    t.field('role', {
      type: 'Role',
      resolve: (parent, _, ctx) => {
        return ctx.prisma.user
          .findUnique({
            where: { id: parent.id || undefined }
          })
          .role();
      }
    });
  }
});
