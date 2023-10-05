const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLBoolean } = require('graphql');
const resolvers = require('../resolvers/resolvers');

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    _id: { type: GraphQLID },
    description: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    todos: {
      type: new GraphQLList(TodoType),
      resolve: resolvers.Query.todos
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTodo: {
      type: TodoType,
      args: {
        description: { type: GraphQLString }
      },
      resolve: resolvers.Mutation.createTodo
    },
    updateTodo: {
      type: TodoType,
      args: {
        _id: { type: GraphQLID },
        description: { type: GraphQLString }
      },
      resolve: resolvers.Mutation.updateTodo
    },
    deleteTodo: {
      type: GraphQLBoolean,
      args: {
        _id: { type: GraphQLID }
      },
      resolve: resolvers.Mutation.deleteTodo
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

module.exports = schema;
