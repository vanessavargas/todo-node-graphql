const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    _id: { type: String, default: uuidv4 },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
    createdBy: { type: String }, 
    modifiedOn: { type: Date },
    modifiedBy: { type: String }, 
    lastLogin: { type: Date },
    imageUrl: { type: String },
});

module.exports = mongoose.model('User', userSchema);