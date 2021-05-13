import { objectType } from 'nexus';

export const Class = objectType({
  name: 'Class',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('description');
    t.list.field('registrations', {
      type: 'Registration',
      resolve: async (parent, __, { prisma }) => {
        return await prisma.class
          .findUnique({
            where: { id: parent.id || undefined }
          })
          .registrations();
      }
    });
    t.nonNull.field('createdAt', { type: 'DateTime' });
  }
});
