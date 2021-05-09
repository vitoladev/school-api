import { asNexusMethod, makeSchema } from 'nexus';
import { DateTimeResolver } from 'graphql-scalars';
import * as models from './models';
import * as resolvers from './resolvers';

export const DateTime = asNexusMethod(DateTimeResolver, 'date');

export const schema = makeSchema({
  types: [DateTime, models, resolvers],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts'
  },
  contextType: {
    module: require.resolve('./context'),
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
