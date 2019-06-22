const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const expressHbs = require('express-handlebars');

const app = express();
//register a new templating engine
// in app.engine you can give any name like "hbs" => file extension will be hbs
app.engine("hbs", expressHbs(
    {   layoutsDir: "views/layouts",
        defaultLayout: 'main-layouts',
        extname: 'hbs'
    }));
app.set("view engine", "hbs");
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
    res.render("404", {title: "PageNotFound"})
    // res.status(404).sendFile(path.join(__dirname, "views", "404.html" ))
})

// construct a path to a root directory with a helper function

app.listen(3000)
