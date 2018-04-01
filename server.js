const http = require('http')

let server  = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    response.write("Hello")
    response.end()
})

let port = 3000
server.listen(port,() => {
    console.log(`Server started on port:${port}`)
})

server.on("close", ()=>  {
    console.log("Server closed.")
})

server.on("connection", (socket) => {
    console.log("connection")
})