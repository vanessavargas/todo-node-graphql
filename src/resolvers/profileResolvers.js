const Profile = require('../models/profile'); 
const { handleError } = require('../utils/errorHandler');
const { ERROR_MESSAGES } = require('../utils/constants');

const profileResolver = {
  Query: {
    profiles: async () => {
      try {
        return await Profile.find();
      } catch (error) {
        handleError(ERROR_MESSAGES.PROFILE_NOT_FOUND + ' ' + error.message);
      }
    }
  },
  Mutation: {
    createProfile: async (_, { description }) => {
      try {
        const profile = new Profile({ description });
        return await profile.save();
      } catch (error) {
        handleError(ERROR_MESSAGES.PROFILE_CREATION_ERROR + ' ' + error.message);
      }
    },
    updateProfile: async (_, { id, description }) => {
      try {
        return await Profile.findByIdAndUpdate(id, { description }, { new: true });
      } catch (error) {
        handleError(ERROR_MESSAGES.PROFILE_UPDATE_ERROR + ' ' + error.message);
      }
    },
    deleteProfile: async (_, { id }) => {
      try {
        await Profile.findByIdAndDelete(id);
        return true;
      } catch (error) {
        handleError(ERROR_MESSAGES.PROFILE_DELETION_ERROR + ' ' + error.message);
      }
    }
  }
};

module.exports = profileResolver;