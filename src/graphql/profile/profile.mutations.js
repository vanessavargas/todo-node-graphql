const { GraphQLString, GraphQLID, GraphQLBoolean } = require("graphql");
const { ProfileType } = require("./profile.type");
const profileResolver = require("./profile.resolver");

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

module.exports = {
  createProfile,
  updateProfile,
  deleteProfile,
};
