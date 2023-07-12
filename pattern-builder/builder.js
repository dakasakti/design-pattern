const Joi = require("joi");

class JoiSchemaBuilder {
  constructor() {
    this.schema = Joi.object();
  }

  fullname() {
    this.schema = this.schema.keys({
      fullname: Joi.string().required(),
    });
    return this;
  }

  email() {
    this.schema = this.schema.keys({
      email: Joi.string().email().required(),
    });
    return this;
  }

  password() {
    this.schema = this.schema.keys({
      password: Joi.string().min(6).required(),
    });
    return this;
  }

  build() {
    return this.schema;
  }
}

module.exports = JoiSchemaBuilder;
