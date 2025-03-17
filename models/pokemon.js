import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  height: Number,
  weight: Number,
  types: [String],
  abilities: [String],
  sprite: String,
});

const Pokemon = mongoose.model("Pokemon", PokemonSchema);
export default Pokemon;
