import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Hotel {
    id: ID!
    name: String!
    location: String!
    description: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    getHotels: [Hotel!]!
  }

  type Mutation {
    addHotel(name: String!, location: String!, description: String): Hotel!
    updateHotel(id: ID!, name: String, location: String, description: String): Hotel
    softDeleteHotel(id: ID!): Boolean
  }
`;
