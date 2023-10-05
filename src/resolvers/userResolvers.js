const User = require('../models/user'); 
const { handleError } = require('../utils/errorHandler');
const { ERROR_MESSAGES } = require('../utils/constants');

const UserResolver = {
  Query: {
    users: async () => {
      try {
        return await User.find();
      } catch (error) {
        handleError(ERROR_MESSAGES.USER_NOT_FOUND + ' ' + error.message);
      }
    }
  },
  Mutation: {
    createUser: async (_, { description }) => {
      try {
        const user = new User({ description });
        return await user.save();
      } catch (error) {
        handleError(ERROR_MESSAGES.USER_CREATION_ERROR + ' ' + error.message);
      }
    },
    updateUser: async (_, { id, description }) => {
      try {
        return await User.findByIdAndUpdate(id, { description }, { new: true });
      } catch (error) {
        handleError(ERROR_MESSAGES.USER_UPDATE_ERROR + ' ' + error.message);
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        await User.findByIdAndDelete(id);
        return true;
      } catch (error) {
        handleError(ERROR_MESSAGES.USER_DELETION_ERROR + ' ' + error.message);
      }
    }
  }
};

module.exports = UserResolver;