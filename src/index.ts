import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/typeDefs';
import { resolvers } from './resolvers/hotelResolver';
import { AppDataSource } from './data-source';

const startServer = async () => {
  await AppDataSource.initialize();
  console.log('✅ Database connected');

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

startServer();
