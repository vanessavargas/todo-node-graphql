const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const todoSchemaDb = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  description: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  createdBy: { type: String },  
  modifiedOn: { type: Date },
  modifiedBy: { type: String },  
  state: { type: String, enum: ['Open', 'Closed'], default: 'Open' },
  imageUrl: { type: String }
});

module.exports = mongoose.model('Todo', todoSchemaDb);
