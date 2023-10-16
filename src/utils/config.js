require('dotenv').config(); 

const config = {
  uri: process.env.MONGODB_URI,
};

module.exports = config;
