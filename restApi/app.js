const express =  require("express")
const feedRouter = require('./routes/feed');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())  //parses data application/json
app.use("/feed", feedRouter);
app.listen(8080)

