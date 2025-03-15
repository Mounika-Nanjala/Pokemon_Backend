import express from "express";
import "./db/index.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon Backend!");
});

// Error handling for invalid routes
app.use((req, res, next) => {
  res.status(404).send({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
