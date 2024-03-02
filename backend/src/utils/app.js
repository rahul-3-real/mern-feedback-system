import express from "express";
import cors from "cors";

import FeedbackRouter from "../routes/feedback.routes.js";

const app = express();

// Middleware configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", FeedbackRouter);

export default app;
