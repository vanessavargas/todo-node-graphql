const { GraphQLString, GraphQLID, GraphQLBoolean } = require("graphql");
const { TodoType } = require("./todo.type");
const todoResolver = require("./todo.resolver");

const createTodo = {
  type: TodoType,
  args: {
    description: { type: GraphQLString },
    state: { type: GraphQLString },
  },
  resolve: todoResolver.Mutation.createTodo,
};

const updateTodo = {
  type: TodoType,
  args: {
    _id: { type: GraphQLID },
    description: { type: GraphQLString },
    state: { type: GraphQLString },
  },
  resolve: todoResolver.Mutation.updateTodo,
};

const deleteTodo = {
  type: GraphQLBoolean,
  args: {
    _id: { type: GraphQLID },
  },
  resolve: todoResolver.Mutation.deleteTodo,
};

module.exports = {
  createTodo,
  updateTodo,
  deleteTodo,
};
