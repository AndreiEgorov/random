const products = []

module.exports.getAddProductPage = (req, res, next) => {
    res.render("add-product", {
        title:"BATMANS",
        path:"admin/add-product",
        formsCSS: true,
        activeAddProduct: true
    });
};


module.exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/')
};

module.exports.products = products;

module.exports.getProductsPage = (req, res, next) => {
    console.log("PSER", products);
    res.render('shop', {
        prods: products,
        title: "Shop Tab Name",
        path: "/",
        hasProducts: products.length > 0,
        productCSS: true,
        activeShop: true,
    })
};
