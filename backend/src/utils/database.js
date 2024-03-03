import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  const DB_NAME = process.env.DB_NAME;
  const DB_USERNAME = process.env.DB_USERNAME;
  const DB_PASSWORD = process.env.DB_PASSWORD;

  // const url = `${MONGO_URI}/${DB_NAME}`;
  const url = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.jdoslze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    const instance = await mongoose.connect(url);
    console.log(`😀 Database connected to ${instance.connection.host}`);

    return instance;
  } catch (error) {
    console.log(`😒 ERROR: ${error.message}`);
  }
};

export default connectDB;
