const {
  addProducts,
  updatedProduct,
  deleteProduct,
  singleProduct,
  getProduct,
} = require("../controller/products.controller");
const express = require("express");
let router = express.Router();

router.post("/products", addProducts);

router.get("/products", getProduct);

router.put("/products/:id", updatedProduct);

router.delete("/products/:id", deleteProduct);

router.get("/products/:id", singleProduct);

module.exports = router;
