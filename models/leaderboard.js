import mongoose from "mongoose";

const leaderboardSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        score: { type: Number, required: true },
    },
    { timestamps: true }
);

const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);

export default Leaderboard;
