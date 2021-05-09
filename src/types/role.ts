import { objectType } from 'nexus';

const Role = objectType({
  name: 'Role',
  definition(t) {
    t.nonNull.int('id');
    t.string('description');
  }
});

export default Role;
