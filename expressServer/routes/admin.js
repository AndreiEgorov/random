const express = require('express');
const productsController = require("../controllers/products")
const router = express.Router();


// real path is /admin/add-product => Get
router.get("/add-product", productsController.getAddProductPage);

router.post("/add-product", productsController.postAddProduct);

module.exports = router;
