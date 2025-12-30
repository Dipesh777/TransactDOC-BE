const express = require("express");
const cors = require("cors");

// Initializing Express App
const app = express();

// cors middleware currently allowing all client origins
app.use(cors());

// middleware for parsing all incoming data into json
app.use(express.json());

// api route for testing 
app.get('/health', (req, res) => {
    res.send("Server is running");
});

module.exports = app;