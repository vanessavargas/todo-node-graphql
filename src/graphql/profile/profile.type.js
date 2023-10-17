const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const ProfileType = new GraphQLObjectType({
  name: "Profile",
  fields: () => ({
    _id: { type: GraphQLID },
    description: { type: GraphQLString },
  }),
});

module.exports = {
  ProfileType,
};
