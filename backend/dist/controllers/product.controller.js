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
import Product from "../models/product.model.js";
export const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
        return res
            .status(400)
            .json({ success: false, message: "please provide all fields" });
    }
    const newProduct = new Product(product);
    try {
        yield newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "internal server error" });
    }
});
export const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Id not found" });
    }
    try {
        yield Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "successfully deleted" });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "server error" });
    }
});
export const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield Product.find({});
    try {
        res.status(200).json({
            success: true,
            message: "successfully got all products",
            data: products,
        });
        console.log("gotten successfully");
    }
    catch (error) {
        res.status(500).json({ success: false, message: "server error" });
        console.log("error:", error);
    }
});
export const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Id not found" });
    }
    try {
        yield Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, message: "successfully updated" });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});
//# sourceMappingURL=product.controller.js.map