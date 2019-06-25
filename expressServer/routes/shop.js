const express = require('express');
const path = require('path');
const rootDir = require("../util/path")
const adminData = require("./admin")
const productsController = require('../controllers/products')

const routes = express.Router();

routes.get("/", productsController.getProductsPage );

module.exports = routes;
