const Todo = require('../models/todoModel'); 

const resolvers = {
  Query: {
    todos: async () => {
      try {
        return await Todo.find();
      } catch (error) {
        throw new Error('Erro ao obter todos: ' + error.message);
      }
    }
  },
  Mutation: {
    createTodo: async (_, { title }) => {
      try {
        const todo = new Todo({ title });
        return await todo.save();
      } catch (error) {
        throw new Error('Erro ao criar um novo todo: ' + error.message);
      }
    },
    updateTodo: async (_, { id, title }) => {
      try {
        return await Todo.findByIdAndUpdate(id, { title }, { new: true });
      } catch (error) {
        throw new Error('Erro ao atualizar o todo: ' + error.message);
      }
    },
    deleteTodo: async (_, { id }) => {
      try {
        await Todo.findByIdAndDelete(id);
        return true;
      } catch (error) {
        throw new Error('Erro ao excluir o todo: ' + error.message);
      }
    }
  }
};

module.exports = resolvers;
