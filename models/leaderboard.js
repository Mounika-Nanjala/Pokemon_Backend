import mongoose from "mongoose";

const leaderboardSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, trim: true },
        score: { type: Number, required: true, min: 0 },
    },
    { timestamps: true }
);

const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);

export default Leaderboard;
