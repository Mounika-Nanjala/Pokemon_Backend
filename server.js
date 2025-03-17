import express from "express";
import dotenv from "dotenv"; 
import "./db/index.js";
import errorHandler from "./middleware/errorHandler.js";
import cors from "cors";
import { PORT, BASE_URL_FRONTEND } from "./config/config.js";

dotenv.config(); 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon Backend!");
});

// Error handling for invalid routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler middleware
app.use(errorHandler); 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
