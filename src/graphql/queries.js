const { GraphQLList } = require("graphql");
const { UserType, ProfileType, TodoType } = require("./types");
const userResolver = require('./resolvers/user.resolver');
const profileResolver = require('./resolvers/profile.resolver');
const todoResolver = require('./resolvers/todo.resolver');

const users = {
    type: new GraphQLList(UserType),
    resolve: userResolver.Query.users
};

const profiles = {
    type: new GraphQLList(ProfileType),
    resolve: profileResolver.Query.profiles
};

const todos = {
    type: new GraphQLList(TodoType),
    resolve: todoResolver.Query.todos
};

module.exports = { users, profiles, todos };