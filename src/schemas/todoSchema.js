const { GraphQLObjectType, GraphQLString, GraphQLDate, GraphQLID, GraphQLSchema, GraphQLList, GraphQLBoolean } = require('graphql');
const todoResolver = require('../resolvers/todoResolvers');

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    _id: { type: GraphQLID },
    description: { type: GraphQLString },
    createdOn: { type: GraphQLDate},
    state: { type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    todos: {
      type: new GraphQLList(TodoType),
      resolve: todoResolver.Query.todos
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTodo: {
      type: TodoType,
      args: {
        description: { type: GraphQLString },
        createdOn: { type: GraphQLDate},
        state: { type: GraphQLString}
      },
      resolve: todoResolver.Mutation.createTodo
    },
    updateTodo: {
      type: TodoType,
      args: {
        _id: { type: GraphQLID },
        description: { type: GraphQLString },
        createdOn: { type: GraphQLDate},
        state: { type: GraphQLString}
      },
      resolve: todoResolver.Mutation.updateTodo
    },
    deleteTodo: {
      type: GraphQLBoolean,
      args: {
        _id: { type: GraphQLID }
      },
      resolve: todoResolver.Mutation.deleteTodo
    }
  }
});

const todoSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

module.exports = todoSchema;
