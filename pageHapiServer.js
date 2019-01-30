'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const init = async () => {

    await server.register(require('inert'));

    server.route({
        method: 'GET',
        path: '/pageHapi',
        handler: (request, h) => {

            return h.file('./pageHapi/pageHapi.html');
        }
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
}

init()
