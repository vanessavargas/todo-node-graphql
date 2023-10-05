const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLBoolean } = require('graphql');
const profileResolver = require('../resolvers/profileResolvers');

const ProfileType = new GraphQLObjectType({
  name: 'Profile',
  fields: () => ({
    _id: { type: GraphQLID },
    description: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    profiles: {
      type: new GraphQLList(ProfileType),
      resolve: profileResolver.Query.profiles
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createProfile: {
      type: ProfileType,
      args: {
        description: { type: GraphQLString }
      },
      resolve: profileResolver.Mutation.createProfile
    },
    updateProfile: {
      type: ProfileType,
      args: {
        _id: { type: GraphQLID },
        description: { type: GraphQLString }
      },
      resolve: profileResolver.Mutation.updateProfile
    },
    deleteProfile: {
      type: GraphQLBoolean,
      args: {
        _id: { type: GraphQLID }
      },
      resolve: profileResolver.Mutation.deleteProfile
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

module.exports = schema;