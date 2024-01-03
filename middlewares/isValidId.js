const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { bicycleId } = req.params;
  if (!isValidObjectId(bicycleId)) {
    next(HttpError(400, `${bicycleId} is not a valid id`));
  }
  next();
};

module.exports = isValidId;
