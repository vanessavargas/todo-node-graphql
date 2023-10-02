const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, 
    GraphQLSchema, GraphQLList, GraphQLBoolean } = graphql;
    
const TodoType = new GraphQLObjectType({
    name: 'Todo',
    fields: () => ({
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      completed: { type: GraphQLBoolean }
    })
  });

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    todos: {
      type: new GraphQLList(TodoType),
      resolve(parent, args) {
        // Lógica para obter todos os Todos
        // ? todos: [Todo]
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTodo: {
      type: TodoType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parent, args) {
        // Lógica para criar um novo Todo
        // ? createTodo(title: String!): Todo
      }
    },
    updateTodo: {
      type: TodoType,
      args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString }
      },
      resolve(parent, args) {
        // Lógica para atualizar um Todo existente
        // ? updateTodo(id: ID!, title: String!): Todo
      }
    },
    deleteTodo: {
      type: GraphQLBoolean,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // Lógica para excluir um Todo
        // ? deleteTodo(id: ID!): Boolean
      }
    }
  }
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
  });
  
module.exports = schema;

