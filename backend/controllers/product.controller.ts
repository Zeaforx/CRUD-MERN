import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
export const createProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all fields" });
  }
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "internal server error" });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Id not found" });
  }
  //   rere
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find({});
  try {
    res.status(200).json({
      success: true,
      message: "successfully got all products",
      data: products,
    });
    console.log("gotten successfully");
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });

    console.log("error:", error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Id not found" });
  }
  try {
    await Product.findByIdAndUpdate(id, product, { new: true });
    res.status(200).json({ success: true, message: "successfully updated" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
