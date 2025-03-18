import asyncHandler from "express-async-handler";
import Leaderboard from "../models/Leaderboard.js";

export const getAllPokemons = asyncHandler(async (req, res) => {
    const data = await Leaderboard.find({});
    console.log("pokemon data: ", data);
    res.status(200).json(data);
});

export const createPokemon = asyncHandler(async (req, res) => {
    const { username, score, date } = req.body;
    if (!username || !score || !date) {
        res.status(400);
    }
    const pokemon = await Leaderboard.create({ username, score, date });
    res.status(201).json(pokemon);
});

// Get Leaderboard
export const getLeaderboard = asyncHandler(async (req, res) => {
    const leaderboard = await Leaderboard.find().sort({ score: -1 });
    res.status(200).json(leaderboard);
});

// Add new entry
export const postLeaderboard = asyncHandler(async (req, res) => {
    const { username, score } = req.body;
    if (!username || score === undefined) {
        res.status(400);
        throw new Error("Username and score are required");
    }

    const newEntry = await Leaderboard.create({ username, score });
    res.status(201).json(newEntry);
});
