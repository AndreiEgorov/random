const Product = require("../models/product");

module.exports.getAddProductPage = (req, res, next) => {
    res.render("admin/edit-product", {
        title:"BATMANS",
        path:"/admin/add-product",
        editing: false
    });
};

module.exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode){
        return res.redirect('/')
    }
    console.log("HER", req.params.productId)
    const productId = req.params.productId;
    Product.findById(productId,  product => {
        if (!product){
            console.error("NO product found")
            return res.redirect("/")
            // return new Error("Product is not found", product)
        }
        console.log("ROPD", product)
        res.render("admin/edit-product", {
            title:"Editing My Product",
            path:"/admin/edit-product",
            editing: editMode,
            product: product
        });
    })


};

module.exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/')
};

module.exports.getProducts = (req, res, next) =>{
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            title: "AdminProducts",
            path: "/admin/products",
        })
    });

};
