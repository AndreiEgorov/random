const express = require('express');
const path =  require('path')
const rootDir = require("../util/path")
const router = express.Router();
const products = []

// real path is /admin/add-product => Get
router.get("/add-product", (req, res, next) => {
    //sending html file instead of ugly markup
    res.render("add-product", {title:"BATMANDOOOOS"})
    // res.sendFile(path.join(rootDir, "views/", "add-product.html" ))
    // res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'> <button>Add product</button></form>")

});
router.post("/add-product", (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/')
})

module.exports.routes = router;
module.exports.products = products;
