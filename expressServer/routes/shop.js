const express = require('express');
const path = require('path');
const rootDir = require("../util/path")
const adminData = require("./admin")

const routes = express.Router();

routes.get("/", (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views/', 'shop.html'))
    //no need to send file. render => it knows what template engine to use and where to find 'shop' file as it is mentioned on app.js
    const products = adminData.products;
    console.log("PSER", products)
    res.render('shop', {prods: products, title: "Shop Tab Name", path:"/", hasProducts: products.length > 0})
});


module.exports = routes;
