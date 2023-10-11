const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const { users, user, profiles, todos } = require("./queries");
const {
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
} = require("./mutations");

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
