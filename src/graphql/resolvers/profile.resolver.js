const Profile = require('../../models/profile'); 
const { handleError } = require('../../utils/errorHandler');
const { ERROR_MESSAGES } = require('../../utils/constants');

const profileResolver = {
  Query: {
    profiles: async () => { 
      try {
        return await Profile.find();
      } catch (error) {
        handleError(ERROR_MESSAGES.PROFILES_NOT_FOUND + ' ' + error.message);
      }
    },
    profile: async (_, { _id }) => {
      try {
        return await Profile.findById(_id);
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
    updateProfile: async (_, { _id, description }) => {
      try {
        return await Profile.findByIdAndUpdate(_id, { description }, { new: true });
      } catch (error) {
        handleError(ERROR_MESSAGES.PROFILE_UPDATE_ERROR + ' ' + error.message);
      }
    },
    deleteProfile: async (_, { _id }) => {
      try {
        await Profile.findByIdAndDelete(_id);
        return true;
      } catch (error) {
        handleError(ERROR_MESSAGES.PROFILE_DELETION_ERROR + ' ' + error.message);
      }
    }
  }
};

module.exports = profileResolver;