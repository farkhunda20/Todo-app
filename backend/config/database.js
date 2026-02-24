import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionsInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`,
    );
    console.log(`mongodb connected!!
     ${connectionsInstance.connection.host}
        `);
  } catch (error) {
    console.log("mongodb connection failed!", error);
    process.exit(1);
  }
};

export default connectDB;
