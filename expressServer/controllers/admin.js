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
    const productId = req.params.productId;
    Product.findById(productId,  product => {
        if (!product){
            console.error("NO product found")
            return res.redirect("/")
        }
        res.render("admin/edit-product", {
            title:"Editing My Product",
            path:"/admin/edit-product",
            editing: editMode,
            product: product
        });
    })
};

module.exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description
    const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedDesc, updatedPrice)
    updatedProduct.save();
    res.redirect('/admin/products')

}

module.exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(null, title, imageUrl, description, price);
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
