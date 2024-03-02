import express from "express";

const app = express();

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

export default app;
