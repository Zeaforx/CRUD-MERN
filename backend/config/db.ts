import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(conn.connection.host);
    console.log(conn.connection.name);
    console.log(conn.connection.collections);
  } catch (error) {
    console.log(`error message: ${error}`);
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); //process code 1 means exit with failure
  }
};
// const connectionDB = async () => {
//   while (true) {
//     try {
//       const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
//       console.log(`✅ Connected to MongoDB: ${conn.connection.host}`);
//       console.log(`📌 Database Name: ${conn.connection.name}`);
//       console.log(`📁 Collections:`, conn.connection.collections);
//       break; // Exit loop when connected successfully
//     } catch (error) {
//       console.error("❌ MongoDB connection error:", error);
//       console.log("🔄 Retrying in 5 seconds...");
//       await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait before retrying
//     }
//   }
// };

export default connectionDB;
