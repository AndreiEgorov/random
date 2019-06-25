const fs = require('fs');
const path = require('path');
// const products = [];


module.exports = class Product {
    constructor(title){
        this.title = title
    }

    save(){
        const p = path.join(__dirname, "..",  'data', 'products.json');
        fs.readFile(p,  (err, fileContent)=>{
            let products = []
            if (!err){
                products = JSON.parse(fileContent);
            }
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            } )
        })
    }
//since the func does not return anything, we put call back to get value from fs.readFile once it is ready
    static fetchAll(callback) {
        const p = path.join(__dirname, "..",  'data', 'products.json');
        fs.readFile(p, 'utf-8', (err, fileContent) => {
            if (err) {
                callback([])
            }
             callback(JSON.parse(fileContent))
        });


    }


}
