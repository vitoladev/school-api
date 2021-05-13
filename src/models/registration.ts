import { objectType } from 'nexus';

export const Registration = objectType({
  name: 'Registration',
  definition(t) {
    t.nonNull.int('id');
    t.field('class', {
      type: 'Class',
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.registration
          .findUnique({
            where: { id: parent.id || undefined }
          })
          .class();
      }
    });
    t.nonNull.int('classId');
    t.nonNull.int('userId');
    t.nonNull.string('status');
    t.nonNull.field('createdAt', { type: 'DateTime' });
  }
});
