'use strict'

const hapiSwaggered = require('hapi-swaggered')

module.exports = {
    plugin: hapiSwaggered,
    options: {
        tags: {
            api: 'API',
        },
        info: {
            title: 'API',
            description: 'Swagger',
            version: '1.0',
        },
    },
}