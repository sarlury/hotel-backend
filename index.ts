import { ApolloServer } from 'apollo-server';
import { typeDefs } from './src/schema/typeDefs';
import { resolvers } from './src/resolvers/hotelResolver';
import { AppDataSource } from './src/data-source';

import 'reflect-metadata';

const startServer = async () => {
  await AppDataSource.initialize();
  console.log('✅ Database connected');

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

startServer();
