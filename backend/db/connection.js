import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Unable to connect DB" + error.message);
  }
};

export default connection;
