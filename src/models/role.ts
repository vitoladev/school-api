import { objectType } from 'nexus';

export const Role = objectType({
  name: 'Role',
  definition(t) {
    t.nonNull.int('id');
    t.string('description');
  }
});
