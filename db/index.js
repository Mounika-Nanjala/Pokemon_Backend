import mongoose from "mongoose";

import { MONGO_URI } from "../config/config.js";
console.log("🔍 MONGO_URI:", process.env.MONGO_URI);
// MongoDB Connection
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};
