import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`database connected ${connect.connection.host}`);
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1);
  }
};
