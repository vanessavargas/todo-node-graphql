const Todo = require('../models/todoModel'); 
const { handleError } = require('../utils/errorHandler');
const { ERROR_MESSAGES } = require('../utils/constants');

const resolvers = {
  Query: {
    todos: async () => {
      try {
        return await Todo.find();
      } catch (error) {
        handleError(ERROR_MESSAGES.TODO_NOT_FOUND + ' ' + error.message);
      }
    }
  },
  Mutation: {
    createTodo: async (_, { title }) => {
      try {
        const todo = new Todo({ title });
        return await todo.save();
      } catch (error) {
        handleError(ERROR_MESSAGES.TODO_CREATION_ERROR + ' ' + error.message);
      }
    },
    updateTodo: async (_, { id, title }) => {
      try {
        return await Todo.findByIdAndUpdate(id, { title }, { new: true });
      } catch (error) {
        handleError(ERROR_MESSAGES.TODO_UPDATE_ERROR + ' ' + error.message);
      }
    },
    deleteTodo: async (_, { id }) => {
      try {
        await Todo.findByIdAndDelete(id);
        return true;
      } catch (error) {
        handleError(ERROR_MESSAGES.TODO_DELETION_ERROR + ' ' + error.message);
      }
    }
  }
};

module.exports = resolvers;
