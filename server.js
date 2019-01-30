'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Salve Quebrada!!!!'
    }
})

server.route({
    method: 'GET',
    path: '/{name}', // NAME NOT NUMBER USING JOI
    handler: (request, h) => {
        return 'Hello___ ' + encodeURIComponent(request.params.name) + '!'
    }
})

server.route({
    method: 'GET',
    path: '/{name}/{job}', // JON >= 5 CHAR USING JOI
    handler: (request, h) => {
        return 'Hello___ ' + encodeURIComponent(request.params.name) + ' ' +encodeURIComponent(request.params.job) + '!'
    }
})

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();