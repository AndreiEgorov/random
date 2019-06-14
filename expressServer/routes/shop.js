const express = require('express');
const path = require('path');

const routes = express.Router();


routes.get("/", (req, res, next) => {
    //using path node module to construct a path to a file of html path.join
    res.sendFile(path.join(__dirname, "../", 'views/', 'shop.html'))
});

module.exports = routes;
