const User = require("../../db/models/user");
const { handleError } = require("../../utils/error/handleError");
const { logError } = require("../../utils/error/loggerError");
const { ERROR_MESSAGES } = require("../../utils/constants");
const { createToken } = require("../../utils/authentication/auth");
const bcrypt = require("bcrypt");

const userResolver = {
  Query: {
    users: async () => {
      try {
        return await User.find();
      } catch (error) {
        handleError(ERROR_MESSAGES.USERS_NOT_FOUND + " " + error.message);
        logError(error);
      }
    },
    user: async (_, { _id }) => {
      try {
        return await  User.findById(_id);
      } catch (error) {
        handleError(ERROR_MESSAGES.USER_NOT_FOUND + " " + error.message);
        logError(error);
      }
    },
  },
  Mutation: {
    createUser: async (_, { userName, email, password }) => {
      try {
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)  
      
        const user = new User({ 
          userName, 
          email, 
          password
          : passwordHash
         });
        await user.save();

        const token = createToken({
          _id: user._id,
          userName: user.userName,
          email: user.email,
        });
        return token;
      } catch (error) {
        handleError(ERROR_MESSAGES.USER_CREATION_ERROR + " " + error.message);
        logError(error);
      }
    },
    login: async (_, args) => {
      try {
        const { email, password } = args;
        const user = await User.findOne({ email }).select("+password");
    
        if (!user) {
          throw new Error("Usuário não encontrado");
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (!isPasswordValid) {
          throw new Error("Credenciais inválidas");
        }
    
        const token = createToken({
          _id: user._id,
          userName: user.userName,
          email: user.email
        });
    
        return token;
      } catch (error) {
        handleError(ERROR_MESSAGES.USER_NOT_FOUND + " " + error.message);
        logError(error);
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
        logError(error);
      }
    },
    deleteUser: async (_, { _id }) => {
      try {
        await User.findByIdAndDelete(_id);
        return true;
      } catch (error) {
        handleError(ERROR_MESSAGES.USER_DELETION_ERROR + " " + error.message);
        logError(error);
      }
    },
  },
};

module.exports = userResolver;
