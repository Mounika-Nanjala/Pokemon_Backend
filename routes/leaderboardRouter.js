import { Router } from "express";

import {
    getLeaderboard,
    postLeaderboard,
} from "../controllers/leaderboardcontroller.js"; // rename if needed when controller is done

const router = Router();

router.route("/").get(getLeaderboard).post(postLeaderboard);

export default router;
