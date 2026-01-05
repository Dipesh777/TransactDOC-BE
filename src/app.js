const express = require("express");
const cors = require("cors");
const Transactionrouter = require("./routes/transaction.routes.js");
const Authrouter = require("./routes/auth.routes.js");

// Initializing Express App
const app = express();

// cors middleware currently allowing all client origins
app.use(cors());

// middleware for parsing all incoming data into json
app.use(express.json());

// api route for testing 
app.use('/api/transactions', Transactionrouter);
app.use("/api/auth", Authrouter);

module.exports = app;