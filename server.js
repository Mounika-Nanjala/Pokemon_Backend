import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./db/index.js";
import errorHandler from "./middleware/errorHandler.js";
import cors from "cors";
import router from "./routes/leaderboardRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const port = process.env.PORT || 5000;

app.use("/", router);

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
