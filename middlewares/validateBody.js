const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const message = `missing required ${error.details[0].context.label} field`;
      throw HttpError(400, message);
      }
      next()
  };
  return func;
};


const validateStatus = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const message = `missing field ${error.details[0].context.label}`;
      throw HttpError(400, message);
    }
    next();
  };
  return func;
};

module.exports = {
  validateBody,
  validateStatus,

};
