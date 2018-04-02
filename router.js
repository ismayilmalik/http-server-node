const assert = require('assert')
const utils = require('./utils')

function Router() {
    this._routes = new Map()
}

Router.Route = function (path, method, handler) {

    assert(path, "path not provided")
    assert(method, "method not provided")
    assert(handler, "handler not provided")

    this.path = path
    this.method = method
    this.handler = handler
}


Router.prototype.registerRoute = function (route) {
    let key = utils.makePathKey(route.path, route.method)
    this._routes.set(key, route)
}

Router.prototype.handleRequest = function (request, response) {
    let key = utils.makePathKey(request.url, request.method)
    let route = this._routes.get(key)
    if (route) {
        route.handler(request, response)
    } else {
        response.write("Unknown page")
        response.end()
    }
}

module.exports = Router