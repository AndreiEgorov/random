const Product = require("../models/product");

module.exports.getAddProductPage = (req, res, next) => {
    res.render("add-product", {
        title:"BATMANS",
        path:"admin/add-product",
        formsCSS: true,
        activeAddProduct: true
    });
};


module.exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/')
};



module.exports.getProductsPage = (req, res, next) => {
    Product.fetchAll(products => {
        console.log("PROD", products)
        res.render('shop', {
            prods: products,
            title: "Shop Tab Name",
            path: "/",
            hasProducts: products.length > 0,
            productCSS: true,
            activeShop: true,
        })
    });
};
