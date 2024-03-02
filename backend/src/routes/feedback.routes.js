import Router from "express";
import { submitFeedback } from "../controllers/feedback.controllers.js";

const router = new Router();

router.post("/submit-feedback", submitFeedback);

export default router;
