const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLEnumType } = require("graphql");
const { User } = require('../models/user');

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: { type: GraphQLID },
    userName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const ProfileType = new GraphQLObjectType({
  name: "Profile",
  fields: () => ({
    _id: { type: GraphQLID },
    description: { type: GraphQLString },
  }),
});

const TodoType = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    _id: { type: GraphQLID },
    description: { type: GraphQLString },
    createdOn: { type: GraphQLString},
    createdBy: { type: UserType, resolve(parent) {
      return User.findById(parent.createdBy);
    } },
    state: { type: GraphQLString },
  }),
});

module.exports = {
  UserType,
  ProfileType,
  TodoType,
};
