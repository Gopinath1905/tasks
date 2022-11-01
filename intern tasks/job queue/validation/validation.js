const joi = require('@hapi/joi');
const authSchema = joi.object({
   
    JobID: joi.number().required(),
    Email: joi.string().required(),
    to: joi.string().required(),
    html: joi.string().required()
})

module.exports={
    authSchema
}