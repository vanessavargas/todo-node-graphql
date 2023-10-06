const { GraphQLSchema, GraphQLObjectType, GraphQLList } = require('graphql');
const profileSchema  = require('./profileSchema');
const userSchema  = require('./userSchema');
const userSchema  = require('./userSchema');
const profileResolver = require ('../resolvers/profileResolvers');
const todoResolver = require ('../resolvers/todoResolvers');
const userResolver = require ('../resolvers/userResolvers');

const schema = new GraphQLSchema({
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
  });

  module.exports = schema;