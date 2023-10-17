const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const TodoType = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    _id: { type: GraphQLID },
    description: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    createdBy: { type: GraphQLString },
    /* createdBy: { type: UserType, resolve(parent) {
      return User.findById(parent.createdBy);
    } }, */
    state: { type: GraphQLString },
  }),
});

module.exports = {
  TodoType,
};
