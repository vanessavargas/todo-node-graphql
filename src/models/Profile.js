const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const profileSchemaDb = new mongoose.Schema({
    _id: { type: String, default: uuidv4 },
    description: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
    createdBy: { type: String }, 
    modifiedOn: { type: Date },
    modifiedBy: { type: String } 
});

module.exports = mongoose.model('Profile', profileSchemaDb);