import express from "express";
import { createProduct, deleteProduct, getAllProducts, updateProduct, } from "../controllers/product.controller.js";
const router = express.Router();
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.get("/", getAllProducts);
router.put("/:id", updateProduct);
export default router;
//# sourceMappingURL=product.route.js.map