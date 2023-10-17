const { GraphQLList } = require("graphql");
const { ProfileType } = require("./profile.type");
const profileResolver = require("./profile.resolver");

const profiles = {
  type: new GraphQLList(ProfileType),
  resolve: profileResolver.Query.profiles,
};

module.exports = { profiles };
