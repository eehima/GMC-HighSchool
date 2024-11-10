// user schema goes here

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trims: true,
  },
  lastName: {
    type: String,
    required: true,
    trims: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trims: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    trims: true,
  },
  password: {
    type: String,
    required: true,
    trims: true,
  },
  class: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  fullAddress: {
    type: String,
    required: true,
  },
  isUser: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date().now,
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
