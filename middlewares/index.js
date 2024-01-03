const {
  validateBody,
 
  validateStatus,
} = require("./validateBody");
const isValidId = require('./isValidId')

const upload=require('./upload')

module.exports = {
  validateBody,
 
  isValidId,
  validateStatus,
  upload,
};