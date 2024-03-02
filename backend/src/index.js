import "dotenv/config";
import connectDB from "./utils/database.js";
import connectServer from "./utils/server.js";

// Connections
connectDB();
connectServer();
