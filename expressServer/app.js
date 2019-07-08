const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
// const productsController = require("./controllers/products");
const errorController = require('./controllers/error')
const db = require('./util/database');

const app = express();

//ejs is supported out of the box => no need to initialize it with app.engine()
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop");

//promise allows us to chain then and catch
db.pool.execute('SELECT * FROM products')
    .then(result => {
        console.log(result[0], result[1])
    })
    .catch(err => {
        console.log(err)
    })

//needed to parse req.body
app.use(bodyParser.urlencoded({extended: false})) //parses data that comes through <form> aka x-www-form-urlencoded

app.use(express.static(path.join(__dirname, 'public')));

//to add /admin in front of every path
app.use("/admin", adminRoutes)
app.use(shopRoutes);

//add not found page
app.use(errorController.get404Page);

app.listen(3000)
