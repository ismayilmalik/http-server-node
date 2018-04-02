const http = require('http')
const Router = require('./router')

let server  = http.createServer()
let port = 3000
let router = new Router()

router.registerRoute(new Router.Route("/", "GET", (request, response) => {
    response.write("Hello from main page")
    response.end()
}))

router.registerRoute(new Router.Route("/", "POST", (request, response) => {
    response.write("Hello from main page post")
    response.end()
}))

router.registerRoute(new Router.Route("/detail", "GET", (request, response) => {
    response.write("Hello from detail page")
    response.end()
}))

server.on("request", (request, response) => {
    router.handleRequest(request, response)
})


server.listen(port,() => {
    console.log(`Server started on port:${port}`)
})