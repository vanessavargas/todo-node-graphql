const { GraphQLString, GraphQLID, GraphQLBoolean } = require("graphql");
const { UserType } = require("./user.type");
const userResolver = require("./user.resolver");

const createUser = {
  type: UserType,
  args: {
    userName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    createdOn: { type: GraphQLString },
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
};

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

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  login,
};
