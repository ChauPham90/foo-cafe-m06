'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
let state = 10;
const routes = {
    '/state': function main(request, response) {
        response.writeHead(200, { 'Content-type': 'application/json' });
        response.end(JSON.stringify({ "state": state }))
    },
    '/add': function main(request, response) {
        response.writeHead(200, { 'Content-type': 'application/json' });
        response.end(JSON.stringify({ "state": ++state }))
    },
    '/subtract': function main(request, response) {
        response.writeHead(200, { 'Content-type': 'application/json' });
        response.end(JSON.stringify({ "state": --state }))
    },
    '/reset': function main(request, response) {
        response.writeHead(200, { 'Content-type': 'application/json' });
        state = 10;
        response.end(JSON.stringify({ "state": state }))
    }
}

function createServer(port) {
    const server = http.createServer((request, response) => {
        // TODO: Write your homework code here
        if (request.url in routes) {
            return routes[request.url](request, response);
        }
        response.writeHead(404, { 'Content-type': 'application/json' });
        response.end(JSON.stringify({
            "error": "Not found"
        }));
    });

    return server;
}

module.exports = {
    createServer
};
