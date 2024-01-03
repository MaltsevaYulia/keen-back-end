const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const statuses = ["Available", "Busy", "Unavailable"];

const bicycleSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for bicycle"],
    minlength: 5,
  },
  type: {
    type: String,
    required: [true, "Set type for bicycle"],
    minlength: 5,
  },
  color: {
    type: String,
    required: [true, "Set color for bicycle"],
    minlength: 5,
  },
  id: {
    type: String,
    required: [true, "Set id for bicycle"],
  },
  price: {
    type: Number,
    required: [true, "Set price for bicycle"],
  },
  wheelSize: {
    type: Number,
    required: [true, "Set wheelSize for bicycle"],
  },
  description: {
    type: String,
    required: [true, "Set description for bicycle"],
    minlength: 5,
  },
  status: {
    type: String,
    required: [true, "Set status for bicycle"],
    enum: statuses,
  },
});

bicycleSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().min(5).required(),
  type: Joi.string().min(5).required(),
  color: Joi.string().min(5).required(),
  id: Joi.string().required(),
  price: Joi.number().required(),
  wheelSize: Joi.number().required(),
  description: Joi.string().min(5).required(),
  status: Joi.string().required(),
});

const updateStatusSchema = Joi.object({
  status: Joi.string()
    .valid(...statuses)
    .required(),
});

const schemas = {
  addSchema,
  updateStatusSchema,
};

const Bicycle = model("bicycle", bicycleSchema);

module.exports = {
  Bicycle,
  schemas,
};
