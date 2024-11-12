// import express
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const port = 5050;

    // connect to mongodb
    mongoose.connect("mongodb+srv://ehima87:Ephraim1@cluster0.cymq9.mongodb.net/GMC-highschooldatabase?retryWrites=true&w=majority&appName=Cluster0").then(() => {
        console.log("Connected to MongoDB");

        // create express app
        const app = express();

        // define middleware
        app.use(express.json());

        // define routes
        app.use("/api", userRoutes);


        // start server
        app.listen(port, () => {
            console.log(`Server started on port http://localhost:${port}`);
        });
        
    });