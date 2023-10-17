const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const { users, user } = require("./user/user.queries");
const { profiles } = require("./profile/profile.queries");
const { todos } = require("./todo/todo.queries");
const {
  createUser,
  updateUser,
  deleteUser,
  login,
} = require("./user/user.mutations");
const {
  createProfile,
  updateProfile,
  deleteProfile,
} = require("./profile/profile.mutations");
const { createTodo, updateTodo, deleteTodo } = require("./todo/todo.mutations");

// Define QueryType
const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: {
    user,
    users,
    profiles,
    todos,
  },
});

// Define MutationType
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: {
    createUser,
    updateUser,
    deleteUser,
    login,
    createProfile,
    updateProfile,
    deleteProfile,
    createTodo,
    updateTodo,
    deleteTodo,
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
