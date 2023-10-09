const path = require('path');
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { mergeResolvers } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');

const resolverFiles = loadFilesSync(path.join(__dirname, "../resolvers/*.resolver.*"));

const typeDefs = `
type Profile {
  _id: ID
  description: String
}

type Todo {
  _id: ID
  description: String
  state: String
}

type User {
  _id: ID
  userName: String
  email: String
  password: String
}

type Query {
  profiles: [Profile]
  todos: [Todo]
  users: [User]
}

type Mutation {
  createProfile(description: String): Profile
  updateProfile(_id: ID, description: String): Profile
  deleteProfile(_id: ID): Boolean

  createTodo(description: String, state: String): Todo
  updateTodo(_id: ID, description: String, state: String): Todo
  deleteTodo(_id: ID): Boolean

  createUser(userName: String, email: String, password: String): User
  updateUser(_id: ID, userName: String, email: String, password: String): User
  deleteUser(_id: ID): Boolean
}
`
const resolvers = mergeResolvers(resolverFiles)
const schema = makeExecutableSchema ({ typeDefs, resolvers });

module.exports = {
  schema
}

/* const { mergeSchemas } = require('graphql-tools');
const { GraphQLSchema } = require('graphql');
const profileSchema  = require('./profileSchema');
const todoSchema = require('./todoSchema');
const userSchema  = require('./userSchema');

const mergedSchemas = mergeSchemas([profileSchema, todoSchema, userSchema]);

const finalSchema = new GraphQLSchema({
  query: mergedSchemas.getQueryType(),
  mutation: mergedSchemas.getMutationType(),
});

module.exports = finalSchema; */





/* const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
          ...userSchema.getQueryType().getFields,
          ...userSchema.getQueryType().getFields,
          ...profileSchema.getQueryType().getFields
        },
      }),
      mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
          ...todoSchema.getMutationType().getFields,
          ...userSchema.getMutationType().getFields,
          ...profileSchema.getMutationType().getFields
        },
      }),
      resolvers: {
        Query: userResolver.Query,
        Mutation: userResolver.Mutation,
        ...profileResolver,
        ...todoResolver
      }
  }); */

 // module.exports = schema;