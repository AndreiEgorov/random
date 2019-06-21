const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
//set pug globally to access anywhere in project. No need to import as pug autoregisters with express
//compile dynamic templates with pug and find then at "views" folder
app.set("view engine", "pug");
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
app.use((req, res, next)=>{
    res.render("404", {title: "PageNotFound"})
    // res.status(404).sendFile(path.join(__dirname, "views", "404.html" ))
})

// construct a path to a root directory with a helper function






app.listen(3000)
