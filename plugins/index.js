'use strict'

const { plugins } = require('../config')

const inert = require('./inert');
const vision = require('./vision');
const HapiSwaggered = require('./hapi-swaggered')
const HapiSwaggeredUI = require('./hapi-swaggered-ui')

module.exports = [
    inert,
    vision,
    plugins.swagger ? HapiSwaggered : null,
    plugins.swagger ? HapiSwaggeredUI : null,
].filter(plugin => plugin != null)

