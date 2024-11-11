 // user schema goes here

 const mongoose = require('mongoose');

 const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
  classGrade: {
    type: String,
    required: true
  }

});








 const User = mongoose.model('User', userSchema);

module.exports = User;