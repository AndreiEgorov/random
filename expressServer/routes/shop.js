const express = require('express');
const path = require('path');
const rootDir = require("../util/path")
const adminData = require("./admin")

const routes = express.Router();

routes.get("/", (req, res, next) => {
    console.log("shop.js", adminData.products);
    //using path node module to construct a path to a file of html path.join
    res.sendFile(path.join(rootDir, 'views/', 'shop.html'))
});

module.exports = routes;
