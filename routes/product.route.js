const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

//All my routers for products
//use router to get all products in the database
router.get('/', getProducts);

//use router to get specific product via ID
router.get("/:id", getProduct);

//create new product in the database
router.post("/", createProduct);

//update product in the databse
router.put("/:id", updateProduct);

//delete product from the database
router.delete("/:id", deleteProduct);

module.exports = router;
