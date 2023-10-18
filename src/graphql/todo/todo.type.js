const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const TodoType = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    _id: { type: GraphQLID },
    description: { type: GraphQLString },
    createdOn: { type: GraphQLString },
    createdBy: { type: GraphQLString },
    state: { type: GraphQLString },
  }),
});

module.exports = {
  TodoType,
};
