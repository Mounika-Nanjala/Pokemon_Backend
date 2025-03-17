import mongoose from "mongoose";
import { MONGO_URI } from "../config/config.js";
// MongoDB Connection
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};
