// user schema goes here

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    default: "student",
  },
  password: {
    type: String,
    required: true,
    trim: true,
    default: "pass",
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
    default: new Date()
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
