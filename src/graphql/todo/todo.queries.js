const { GraphQLList, GraphQLInt } = require("graphql");
const { TodoType } = require("./todo.type");
const todoResolver = require("./todo.resolver");

const todos = {
  type: new GraphQLList(TodoType),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
  },
  resolve: todoResolver.Query.todos,
};

module.exports = { todos };
