import { SchemaLink } from 'apollo-link-schema';
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
type Query {
  posts: [Post]
}
type Post {
  id: ID!,
  text: String!,
}
type Mutation {
  addPost(text: String!): Post
}
`;

const posts = [{
  id: 1001,
  text: 'This is the first post',
}, {
  id: 1002,
  text: 'This is the second',
}];

const mocks = {
  Mutation: () => ({
    addPost: (root: unknown, { text }: { text: string }) =>
      posts.push({ text, id: Date.now() }),
  }),
  Query: () => ({
    posts: () => posts,
  }),
};

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ mocks, schema });

export const mockedLink = new SchemaLink({ schema });
