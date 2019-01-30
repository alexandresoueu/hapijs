'use strict'

const hapiSwaggeredUi = require('hapi-swaggered-ui')

module.exports = {
    plugin: hapiSwaggeredUi,
    options: {
        title: 'Swagger UI',
        path: '/docs',
        swaggerOptions: {
            validatorUrl: null,
        }
    }
}