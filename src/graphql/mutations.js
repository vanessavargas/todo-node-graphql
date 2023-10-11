const { GraphQLString, GraphQLID, GraphQLBoolean } = require("graphql");
const { ProfileType, TodoType, UserType } = require("./types");
const userResolver = require("./resolvers/user.resolver");
const profileResolver = require("./resolvers/profile.resolver");
const todoResolver = require("./resolvers/todo.resolver");

const createUser = {
  type: UserType,
  args: {
    userName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: userResolver.Mutation.createUser,
};

const login = {
  type: GraphQLString,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: userResolver.Mutation.login,
}

const updateUser = {
  type: UserType,
  args: {
    _id: { type: GraphQLID },
    userName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: userResolver.Mutation.updateUser,
};

const deleteUser = {
  type: GraphQLBoolean,
  args: {
    _id: { type: GraphQLID },
  },
  resolve: userResolver.Mutation.deleteUser,
};

const createProfile = {
  type: ProfileType,
  args: {
    description: { type: GraphQLString },
  },
  resolve: profileResolver.Mutation.createProfile,
};

const updateProfile = {
  type: ProfileType,
  args: {
    _id: { type: GraphQLID },
    description: { type: GraphQLString },
  },
  resolve: profileResolver.Mutation.updateProfile,
};

const deleteProfile = {
  type: GraphQLBoolean,
  args: {
    _id: { type: GraphQLID },
  },
  resolve: profileResolver.Mutation.deleteProfile,
};

const createTodo = {
  type: TodoType,
  args: {
    description: { type: GraphQLString },
    //createdOn: { type: GraphQLDate},
    state: { type: GraphQLString },
  },
  resolve: todoResolver.Mutation.createTodo,
};

const updateTodo = {
  type: TodoType,
  args: {
    _id: { type: GraphQLID },
    description: { type: GraphQLString },
    //createdOn: { type: GraphQLDate},
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
};
