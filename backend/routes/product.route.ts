import express from "express";
import { Request, Response } from "express";
import Product from "../models/product.model.js";
import mongoose, { mongo, Mongoose } from "mongoose";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.get("/", getAllProducts);

router.put("/:id", updateProduct);

export default router;
