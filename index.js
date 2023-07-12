const JoiSchemaBuilder = require("./pattern-builder/builder");

// implementation pattern builder
const registerSchema = new JoiSchemaBuilder()
  .email()
  .password()
  .fullname()
  .build();

const registerData = {
  fullname: "Dakasakti",
  email: "example@gmail.com",
  password: "example",
};

const registerValidationResult = registerSchema.validate(registerData);
console.log(registerValidationResult.error); // undefined

const loginSchema = new JoiSchemaBuilder().email().password().build();

const loginData = {
  email: "example@gmail.com",
  password: "example",
};

const loginValidationResult = loginSchema.validate(loginData);
console.log(loginValidationResult.error); // undefined
