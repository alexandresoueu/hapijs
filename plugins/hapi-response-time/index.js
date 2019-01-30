'use strict'

const hapiResponseTime = require('hapi-response-time')

module.exports = {
    plugin: hapiResponseTime,
    options: {
        path: '/timeout',
        async handler(request, h) {
            await(() => new Promise(resolve => setTimeout(resolve, 10000)))()
            return h.response('Response after 10 SECONDS')
        }
    }
}