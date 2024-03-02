import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  const DB_NAME = process.env.DB_NAME;

  try {
    const instance = await mongoose.connect(`${MONGO_URI}/${DB_NAME}}`);
    console.log(`😀 Database connected to ${instance.connection.host}`);

    return instance;
  } catch (error) {
    console.log(`😒 ERROR: ${error.message}`);
  }
};

export default connectDB;
