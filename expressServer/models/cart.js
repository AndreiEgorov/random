const fs = require('fs')
const path = require('path')
const p = path.join(__dirname, "..",  'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice){
            //fetch prev cart
        fs.readFile(p,  (err, fileContent)=>{
            let cart = {products : [], totalPrice: 0}
            if (!err){
                cart = JSON.parse(fileContent)
            }
            //analyze cart => find existing prod
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            //add new prod || increase quantity
            let updatedProduct;
            if (existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty +1;
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatedProduct
            } else {
                updatedProduct = {id: id, qty : 1};
                cart.products = [...cart.products, updatedProduct ]
            }
            //put "+" in front of productPrice to convert string to number
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p,  JSON.stringify(cart), err =>{
                console.log(err)
            })
        })


    }
}
