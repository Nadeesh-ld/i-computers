import express from "express";
import { createProduct,getAllProducts,deleteProduct,updateProduct,getProductById } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getAllProducts)
productRouter.post("/", createProduct)
productRouter.get("/search",()=>{
    console.log("Search API")
})

//Get product by ID
productRouter.put("/:productId", updateProduct)
productRouter.delete("/:productId", deleteProduct)
productRouter.get("/:productId",getProductById)


export default productRouter;