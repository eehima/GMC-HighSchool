  // userRoutes goes here

  const express = require('express');
  const router = express.Router();
  const Post = require('../models/User');

// Approve application endpoint(change is user from false to true)
router.patch('/approve-user/:id/approve', async (req, res) => {
    try {
        const user = await Post.findByIdAndUpdate(req.params.id, { isUser: true }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Each student should be able to update their information
router.put('/update-user/:UserId', async (req, res) => {
    // Get the user ID from the request parameters
    const userId = req.params;
    // Get the updated user information from the request body
    const { firstName, lastName, dateOfBirth, email, password } = req.body;
     try {
        const user = await Post.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Update the user information
        user.firstName = firstName;
        user.lastName = lastName;
        user.dateOfBirth = dateOfBirth;
        user.email = email;
        user.password = password;
       // save updated user information
       const updatedUser = await user.save();
       res.status(200).json({ message: 'User updated successfully', user: updatedUser });
     } catch (error) {
        res.status(500).json({ message: error.message });
     }
    
});


//  Endpoint to delete Each student information
router.delete('/delete-user/:UserId', async (req, res) => {
    // Get the user ID from the request parameters
    const userId = req.params;
    // Delete the user
    try {
        const user = await Post.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
  