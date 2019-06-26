const express = require('express');
const adminController = require("../controllers/admin")
const router = express.Router();


// real path is /admin/add-product => Get
router.get("/add-product", adminController.getAddProductPage);

// real path is /admin/products => Get
router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProduct);

module.exports = router;
