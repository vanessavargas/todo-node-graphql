const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLBoolean } = require('graphql');
const resolvers = require('../resolvers/userResolvers');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: { type: GraphQLID },
    userName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: resolvers.Query.users
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        userName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: resolvers.Mutation.createUser
    },
    updateUser: {
      type: UserType,
      args: {
        _id: { type: GraphQLID },
        userName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: resolvers.Mutation.updateUser
    },
    deleteUser: {
      type: GraphQLBoolean,
      args: {
        _id: { type: GraphQLID }
      },
      resolve: resolvers.Mutation.deleteUser
    }
  }
});

const userSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

module.exports = userSchema;
