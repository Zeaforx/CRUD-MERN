import express from "express";
import { Request, Response } from "express";
import connectionDB from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(
  cors({
    origin: [
      "*"
    ],
    // credentials: true, // Allow cookies/tokens
  })
);
app.use(express.json());
app.use("/api/products", productRoutes);
app.listen("5000", () => {
  connectionDB();
  console.log("Server strted at localhost:", port);
});

app.get("/", (req, res) => {
  res.send("server is readyf");
});

// WCjtNsxvKJXGzd4B
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://ajibcaleb:WCjtNsxvKJXGzd4B@cluster0.zljyx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
