import { ApolloServer } from 'apollo-server';
import { schema } from './schema';
import { context } from './types/context';

const server = new ApolloServer({
  schema: schema,
  context: context
});

server.listen().then(async ({ url }) => {
  console.log(`Server ready at: ${url}`);
});
