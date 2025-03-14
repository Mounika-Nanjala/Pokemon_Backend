import asyncHandler from "express-async-handler";
import { Leaderboard } from "../models/leaderboard.js";

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
