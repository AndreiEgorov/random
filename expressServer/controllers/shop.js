const Product = require("../models/product");
const Cart = require("../models/cart");

module.exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            path: "/products",
            title: "All the products"

        })
    });
};

module.exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            product: product,
            path: "/products",
            title: product.title
        })
    })
}


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
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            cartProducts = []
            for (product of products){
                let cartProductData = cart.products.find(prod => prod.id === product.id)
                if (cartProductData){
                    cartProducts.push({productData: product, qty: cartProductData.qty})
                }
            }
            res.render("shop/cart", {
                path: "/cart",
                title: "Your Cart",
                products: cartProducts
            })
        })
    })
};

module.exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId
    Product.findById(prodId, product => {
        Cart.deleteProduct(prodId, product.price)
        res.redirect('/cart')
    })
};

module.exports.postCart = (req, res, next) =>{
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price)
    })
    res.redirect('/products')
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

