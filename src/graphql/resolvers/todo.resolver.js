const Todo = require("../../models/todo");
const { handleError } = require("../../utils/errorHandler");
const { ERROR_MESSAGES } = require("../../utils/constants");

const todoResolver = {
  Query: {
    todos: async (_, { limit = 6, offset = 0 }, { verifiedUser }) => {
      try {
        return await Todo.find({ createdBy: verifiedUser._id })
          .skip(offset)
          .limit(limit);
      } catch (error) {
        handleError(ERROR_MESSAGES.TODOS_NOT_FOUND + " " + error.message);
      }
    },
    todo: async (_, { _id }) => {
      try {
        return await Todo.findById(_id);
      } catch (error) {
        handleError(ERROR_MESSAGES.TODO_NOT_FOUND + " " + error.message);
      }
    },
  },
  Mutation: {
    createTodo: async (_, { description, state }, { verifiedUser }) => {
      try {
        console.log(verifiedUser);
        const todo = new Todo({
          description,
          state,
          createdBy: verifiedUser._id,
        });
        return await todo.save();
      } catch (error) {
        handleError(ERROR_MESSAGES.TODO_CREATION_ERROR + " " + error.message);
      }
    },
    updateTodo: async (_, { _id, description, state }) => {
      try {
        return await Todo.findByIdAndUpdate(
          _id,
          { description, state },
          { new: true }
        );
      } catch (error) {
        handleError(ERROR_MESSAGES.TODO_UPDATE_ERROR + " " + error.message);
      }
    },
    deleteTodo: async (_, { _id }) => {
      try {
        await Todo.findByIdAndDelete(_id);
        return true;
      } catch (error) {
        handleError(ERROR_MESSAGES.TODO_DELETION_ERROR + " " + error.message);
      }
    },
  },
};

module.exports = todoResolver;
