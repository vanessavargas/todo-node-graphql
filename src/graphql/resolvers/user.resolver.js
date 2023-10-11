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
    user: async (_, { _id }) => {
      try {
        return await  User.findById(_id);
      } catch (error) {
        handleError(ERROR_MESSAGES.USER_NOT_FOUND + " " + error.message);
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
        console.log(token);
        return token;
      } catch (error) {
        handleError(ERROR_MESSAGES.LOGIN_ERROR + " " + error.message);
      }
    },
    login: async (_, args) => {
        try {
        const user = await User.findOne({email: args.email}).select("+password");

        if (!user || args.password !== user.password)
          throw new Error("Credenciais inválidas");

          const token = createToken({
            _id: user._id,
            userName: user.userName,
            email: user.email
          })
        return token;
      } catch (error) {
        handleError(ERROR_MESSAGES.USER_NOT_FOUND + " " + error.message);
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
