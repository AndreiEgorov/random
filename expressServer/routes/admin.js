const express = require('express');
const path =  require('path')
const rootDir = require("../util/path")
const router = express.Router();
const products = []

// real path is /admin/add-product => Get
router.get("/add-product", (req, res, next) => {
    res.render("add-product", {
        title:"BATMANS",
        path:"admin/add-product",
        formsCSS: true,
        activeAddProduct: true
    })

});
router.post("/add-product", (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/')
})

module.exports.routes = router;
module.exports.products = products;
