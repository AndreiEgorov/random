const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

//ejs is supported out of the box => no need to initialize it with app.engine()
app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin")
const shopRoutes = require("./routes/shop")
//needed to parse req.body
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

//to add /admin in front of every path
app.use("/admin", adminData.routes)
app.use(shopRoutes);

//add not found page
app.use((req, res, next) => {
    res.render("404", {title: "Page Not Found"})
})


app.listen(3000)
