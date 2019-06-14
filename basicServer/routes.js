const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method
    if (url === '/') {
        res.setHeader("Contentos-Type", 'text/html');
        res.write("<html>");
        res.write("<head><title>Enter Message</title>");
        res.write("<body><form action='/message' method='POST'> <input type='text' name='myMessage'><button type='submit'>Send</button></form></body>");
        res.write("</html>");
        return res.end()
    }
    // get response, redirect to "/" address, write message into a file
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            console.log("CHUNK", Buffer.concat(body).toString())
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsedBody", parsedBody);

            const message = parsedBody.split('=')[1]; //message before split is "myMessage=asdfasfdsa"
            // blocks code while writing
            fs.writeFileSync('message.txt', message);

            // writes assyncronously
            fs.writeFile('newMessage.txt',message, (err)=>{
                console.log("File written")
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })

        });

    }

    res.setHeader("Contentos-Type", 'text/html');
    res.write("<html>");
    res.write("<head><title>My first page</title>");
    res.write("<body><h1>Hello from node js</h1></body>");
    res.write("</html>");
    res.end()
}

module.exports =  {requestHandler};
