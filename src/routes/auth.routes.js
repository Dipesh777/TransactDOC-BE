import express from "express";
const Authrouter = express.Router();
import { registerUser, loginUser } from "../controllers/auth.controllers.js";

Authrouter.post("/register", registerUser);
Authrouter.post("/login", loginUser);

export default Authrouter;
