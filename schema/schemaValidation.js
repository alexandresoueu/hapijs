'use strict'

const Joi = require('joi')

module.exports =  {
    header: {
        name: Joi.string().regex(/^[a-z][a-z\s]*$/).required(),
        job: Joi.string().min(5).required()
    }
}
