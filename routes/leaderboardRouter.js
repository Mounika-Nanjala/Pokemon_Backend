import { Router } from "express";
import {
    getLeaderboard,
    postLeaderboard,
} from "../controllers/leaderboardcontroller.js";

import {
    getAllPokemons,
    createPokemon,
} from "../controllers/leaderboardcontroller.js"; // rename if needed when controller is done

const router = Router();

router.route("/pokemon").get(getAllPokemons).post(createPokemon);
router.route("/").get(getLeaderboard).post(postLeaderboard);

export default router;
