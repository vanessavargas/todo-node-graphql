const Todo = require('../models/todo'); 
const { handleError } = require('../utils/errorHandler');
const { ERROR_MESSAGES } = require('../utils/constants');

const todoResolver = {
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
    createTodo: async (_, { description }) => {
      try {
        const todo = new Todo({ description });
        return await todo.save();
      } catch (error) {
        handleError(ERROR_MESSAGES.TODO_CREATION_ERROR + ' ' + error.message);
      }
    },
    updateTodo: async (_, { _id, description }) => {
      try {
        return await Todo.findByIdAndUpdate(_id, { description }, { new: true });
      } catch (error) {
        handleError(ERROR_MESSAGES.TODO_UPDATE_ERROR + ' ' + error.message);
      }
    },
    deleteTodo: async (_, { _id }) => {
      try {
        await Todo.findByIdAndDelete(_id);
        return true;
      } catch (error) {
        handleError(ERROR_MESSAGES.TODO_DELETION_ERROR + ' ' + error.message);
      }
    }
  }
};

module.exports = todoResolver;
