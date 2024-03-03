import express from "express";
import cors from "cors";

import FeedbackRouter from "../routes/feedback.routes.js";

const app = express();

// Middleware configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", FeedbackRouter);

export default app;
