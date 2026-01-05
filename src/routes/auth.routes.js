const express = require("express");
const Authrouter = express.Router();
const { registerUser, loginUser } = require("../controllers/auth.controllers.js");

Authrouter.post("/register", registerUser);
Authrouter.post("/login", loginUser);

module.exports = Authrouter;
