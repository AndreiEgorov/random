const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method

    if (url === '/') {
        res.write("<html>")
        res.write("<head><title>Basic Page</title></head>");
        res.write("<body>")
        res.write("<h1>Hello from basic page</h1>")
        res.write("<form action='/create-user' method='POST'><input type='text' name='myMessage'><button type='submit'>Send</button></form>")
        res.write("</body>")
        res.write("</html>")
        return res.end()
    }
    if (url === '/users') {
        res.write("<html>")
        res.write("<head><title>Users Page</title></head>");
        res.write("<body><ul>");
        res.write("<li>User 1</li>");
        res.write("<li>User 2</li>");
        res.write("<li>User 3</li>");
        res.write("<li>User 4</li>");
        res.write("</ul></body>");
        res.write("</html>")
        return res.end()

    }
    if (url === '/create-user' && method === "POST") {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk)
        })

        return req.on('end', () => {
            const message = Buffer.concat(body).toString().split("=")[1]
            fs.writeFile('message.txt', message, (err) => {
                console.log(message);
                res.statusCode = 302;
                res.setHeader("Location", '/');
                return res.end()
            })

        })

    }

})

server.listen(3000)
