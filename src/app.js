import express from "express";
import cors from "cors";
import Transactionrouter from "./routes/transaction.routes.js";
import Authrouter from "./routes/auth.routes.js";

// Initializing Express App
const app = express();

// cors middleware currently allowing all client origins
app.use(cors());

// middleware for parsing all incoming data into json
app.use(express.json());

// api route for testing 
app.use('/api/transactions', Transactionrouter);
app.use("/api/auth", Authrouter);

export default app;