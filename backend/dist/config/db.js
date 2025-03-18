var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectionDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield mongoose.connect(`${process.env.MONGO_URI}`);
        console.log(conn.connection.host);
        console.log(conn.connection.name);
        console.log(conn.connection.collections);
    }
    catch (error) {
        console.log(`error message: ${error}`);
        console.error("❌ MongoDB connection error:", error);
        process.exit(1); //process code 1 means exit with failure
    }
});
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
//# sourceMappingURL=db.js.map