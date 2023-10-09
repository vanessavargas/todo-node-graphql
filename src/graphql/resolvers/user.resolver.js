const User = require("../../models/user");
const { handleError } = require("../../utils/errorHandler");
const { ERROR_MESSAGES } = require("../../utils/constants");
const { createToken } = require("../../utils/auth");

const userResolver = {
  Query: {
    users: async () => {
      try {
        return await User.find();
      } catch (error) {
        handleError(ERROR_MESSAGES.USERS_NOT_FOUND + " " + error.message);
      }
    },
  },
  Mutation: {
    createUser: async (_, { userName, email, password }) => {
      try {
        const user = new User({ userName, email, password });
        await user.save();

        const token = createToken({
          _id: user._id,
          userName: user.userName,
          email: user.email,
        });

        return token;
      } catch (error) {
        handleError(ERROR_MESSAGES.USER_CREATION_ERROR + " " + error.message);
      }
    },
    updateUser: async (_, { _id, userName, email, password }) => {
      try {
        return await User.findByIdAndUpdate(
          _id,
          { userName, email, password },
          { new: true }
        );
      } catch (error) {
        handleError(ERROR_MESSAGES.USER_UPDATE_ERROR + " " + error.message);
      }
    },
    deleteUser: async (_, { _id }) => {
      try {
        await User.findByIdAndDelete(_id);
        return true;
      } catch (error) {
        handleError(ERROR_MESSAGES.USER_DELETION_ERROR + " " + error.message);
      }
    },
  },
};

module.exports = userResolver;
