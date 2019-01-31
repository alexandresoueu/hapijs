'use strict';

const Hapi = require('hapi')
const Joi = require('joi')
const plugins = require('./plugins');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });


    await server.register(plugins)

    server.route({
        path: '/',
        method: 'GET',
        config: {
            tags: ['api'],
            handler: () => {
                return 'Salve PEIXAO!!!!'
            }
        },

    })

    server.route({
        method: 'GET',
        path: '/world',
        config: {
            tags: ['api'],
            handler: (request, h) => {
                return 'Salve Quebrada!!!!'
            }
        }
    })

    server.route({
        method: 'GET',
        path: '/{name}',
        config: {
            tags: ['api'],
            handler: (request, h) => {
                return 'Hello___ ' + encodeURIComponent(request.params.name) + '!'
            },
            validate: {
                params: {
                    name: Joi.string().regex(/^[a-z][a-z\s]*$/)
                }
            }
        },
    })

    server.route({
        method: 'GET',
        path: '/{name}/{job}',
        config: {
            tags: ['api'],
            handler: (request, h) => {
                return 'Hello___ ' + encodeURIComponent(request.params.name) + ' ' + encodeURIComponent(request.params.job) + '!'
            },
            validate: {
                params: {
                    name: Joi.string().regex(/^[a-z][a-z\s]*$/),
                    job: Joi.string().regex(/^[a-zA-Z0-9]{5,100}$/)
                }
            }
        },
    })


    try {
        await server.start()
        console.log('Swagger running at: ', server.info.uri)
    } catch (err) {
        console.error(err)
    }
}

init()
