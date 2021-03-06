const express = require("express")
const feedRouter = require('./routes/feed');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())  //parses data application/json

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-METHODS", "GET, POST, PUT")
    res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization")
    next()
})
app.use("/feed", feedRouter);
app.listen(8080)


//to test CORS request add to codepen to send a request
// <button id="get">Get posts</button>

//
// const getButton = document.getElementById('get')
// const postButton = document.getElementById('post')
//
// getButton.addEventListener('click', () => {
//     fetch('http://localhost:8080/feed/posts')
//         .then(res => res.json() )
//         .then(resData => console.log("BOB", resData))
//         .catch(err => console.log("ROSO", err))
// })
//
// postButton.addEventListener('click', () => {
//     fetch('http://localhost:8080/feed/post', {
//         method: "POST",
//         body: JSON.stringify({
//             title: "A codepen post",
//             content: "Codepen content"
//         }),
//         headers:{
//             'Content-Type': 'application/json'
//         }
//
//     })
//         .then(res => res.json())
//         .then(resData => console.log("BOB", resData))
//         .catch(err => console.log("ROSO", err))
// })
