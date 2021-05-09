import { asNexusMethod, makeSchema } from 'nexus';
import Role from './types/role';
import { DateTimeResolver } from 'graphql-scalars';
import Query from './graphql/query';
import User from './types/user';

export const DateTime = asNexusMethod(DateTimeResolver, 'date');

export const schema = makeSchema({
  types: [Query, User, Role, DateTime],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts'
  },
  contextType: {
    module: require.resolve('./types/context'),
    export: 'Context'
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma'
      }
    ]
  }
});
