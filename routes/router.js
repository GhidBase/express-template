import { Router } from "express";
const router = Router();
import dbController from "../controllers/dbController.js";

router.get("/", async (req, res) => {
    Promise.all([dbController.initializeUsers()]);
    res.render("index");
});

export default router;
