const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")
//needed to parse req.body
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

//to add /admin in front of every path
app.use("/admin", adminRoutes)
app.use(shopRoutes);

//add not found page
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, "views", "404.html" ))
})

// construct a path to a root directory with a helper function






app.listen(3000)
