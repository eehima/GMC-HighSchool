// userRoutes goes here
const express = require("express");
const router = express.Router();
const Post = require("../models/User");

// create new post endpoint
router.post("/create-post", async (req, res) => {
  // extract data from request body
  try {
    const { firstName, lastName, dateOfBirth, email, password, classGrade} = req.body;
    // validation
    if (!firstName || !lastName || !dateOfBirth || !email || !password || !classGrade || !isUser) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newPost = new Post({
      firstName,
      lastName,
      dateOfBirth,
      email,
      password,
      classGrade,
      isUser
    });
    //  save post to database
    const savedPost = await newPost.save();
    // send response
    res.status(201).json({ success: true, data: savedPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all post endpoint
router.get("/fetch-posts", async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// update single post endpoint
router.put("/update-post/:id", async (req, res) => {
  // extract postId from request params
  const { id } = req.params;
  // extract data from request body
  const { firstName, lastName, dateOfBirth, email, password, classGrade, isUser} = req.body;

  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    // update post
    post.firstName = firstName;
    post.lastName = lastName;
    post.dateOfBirth = dateOfBirth;
    post.email = email;
    post.password = password;
   post.classGrade = classGrade
   post.isUser = false

    // save updated post to database
    const updatedPost = await post.save();
    // send response
    res.status(200).json({ success: true, data: updatedPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
