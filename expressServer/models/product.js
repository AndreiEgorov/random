const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, "..", 'data', 'products.json');
const Cart = require("./cart");


const getProductsFromFile = (callback) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            callback([])
        }
        callback(JSON.parse(fileContent))
    });
};

module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price
    }

    save() {
        getProductsFromFile(products => {
            if (this.id){
                const existingProductIndex= products.findIndex(product => product.id === this.id)
                const updatedProducts = [...products]
                updatedProducts[existingProductIndex] = this
                fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                    console.log("ERR", err)
                })
            }else{
                this.id = Math.random().toString()
                products.push(this)
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log("ERR", err)
                })
            }
        })
    }

    static deleteById(id) {
        getProductsFromFile(products => {
            const product = products.find(prod => prod.id === id)
            console.log("PRODUCT", product)
            const updatedProducts = products.filter(product => product.id !== id);
            fs.writeFile(p,  JSON.stringify(updatedProducts), err => {
                if (!err){
                    Cart.deleteProduct(id, product.price )
                }
                // console.log("ERROR OCCURRED", err)
            })
        })
    }

//since the func does not return anything, we put call back to get value from fs.readFile once it is ready
    static fetchAll(callback) {
        getProductsFromFile(callback)
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product)
        })
    }
}


