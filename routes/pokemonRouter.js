import express from "express";
import Pokemon from "../pokemon.js";

const router = express.Router();
router.post("/roster", async (req, res) => {
  try {
    const newPokemon = new Pokemon(req.body);
    await newPokemon.save();
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(500).json({ message: "Error saving a pokemon", error });
  }
});

router.get("/roster", async (req, res) => {
  try {
    const roster = await Pokemon.find();
    res.json(roster);
  } catch (error) {
    res.status(500).json({ message: "Error fetching roster", error });
  }
});
