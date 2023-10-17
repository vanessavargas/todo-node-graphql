const { GraphQLList, GraphQLNonNull, GraphQLID } = require("graphql");
const { UserType } = require("./user.type");
const userResolver = require("./user.resolver");

const users = {
  type: new GraphQLList(UserType),
  resolve: userResolver.Query.users,
};

const user = {
  type: UserType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: userResolver.Query.user,
};

module.exports = { users, user };