const Product = require("../models/product");


module.exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            path: "/products",
            title: "All the products"

        })
    });
};


 module.exports.getIndex = (req, res, next)=>{
     Product.fetchAll(products => {
         res.render('shop/index', {
             prods: products,
             path: "/",
             title: "Shop Tab Name"
         })
     });
 }

module.exports.getCart = (req, res, next) =>{
    res.render("shop/cart", {
        path: "/cart",
        title: "Your Cart"
    })
};

module.exports.getOrders = (req, res, next) =>{
    res.render("shop/orders", {
        path: "/orders",
        title: "Your Orders"
    })
};

module.exports.getCheckout = (req, res, next) =>{
    res.render("shop/checkout", {
        path: "/checkout",
        title: "Checkout"
    })
};
