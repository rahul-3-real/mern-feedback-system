import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  const DN_NAME = process.env.DN_NAME;

  try {
    const instance = await mongoose.connect(`${MONGO_URI}/${DN_NAME}`);
    console.log(`😀 Database connected to ${instance.connection.host}`);

    return instance;
  } catch (error) {
    console.log(`😒 ERROR: ${error.message}`);
  }
};

export default connectDB;
