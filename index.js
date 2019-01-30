'use strict'

const Hapi = require('hapi')
const server = new Hapi.Server()

server.connection({ 
    host: 'localhost', 
    port: 8090
})

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('WORLD')
    }
})

server.start(() => {
    console.log('Server working in %s', server.info.uri)
})
