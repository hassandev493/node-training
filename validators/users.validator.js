const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  type: Joi.string().valid("user", "admin", "customer"),
})

module.exports = {
  userSchema
}
