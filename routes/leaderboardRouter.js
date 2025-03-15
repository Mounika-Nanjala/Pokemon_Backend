import { Router } from "express";

import {
    getAllPokemons,
    createPokemon,
} from "../controllers/leaderboardcontroller.js"; // rename if needed when controller is done

const router = Router();

router.route("/").get(getAllPokemons).post(createPokemon);

export default router;
