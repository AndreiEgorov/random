const Cart = require("./cart");
const db = require("../util/database")

const getProductsFromFile = (callback) => {

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
       return db.pool.execute("INSERT INTO products (price, description, imageUrl, title) VALUES(?,?,?,?)", [this.price, this.description, this.imageUrl, this.title,])
    }

    static deleteById(id) {

    }

    static fetchAll() {
        return db.pool.execute('SELECT * FROM products')

    }

    static findById(id) {
        return db.pool.execute("SELECT * FROM products WHERE products.id = ?",[id])

    }
}


