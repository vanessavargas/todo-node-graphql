const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const userSchemaDb = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  userName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Insira um e-mail válido.",
    ],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdOn: { type: String, default: Date.now },
  createdBy: { type: String },
  modifiedOn: { type: String },
  modifiedBy: { type: String },
  lastLogin: { type: String },
  imageUrl: { type: String },
});

module.exports = mongoose.model("User", userSchemaDb);
