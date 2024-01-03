const { Bicycle } = require("../models/bicycleModel");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAllBicycles = async (req, res, next) => {
  
  const result = await Bicycle.find();
  console.log("🚀 ~ getAllBicycles ~ result:", result);
  res.status(200).json(result);
};

const getBicycleById = async (req, res, next) => {
  const { bicycleId } = req.params;
  const result = await Bicycle.findById(bicycleId);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addBicycle = async (req, res, next) => {
  const result = await Bicycle.create({ ...req.body });
  res.status(201).json(result);
};

const deleteBicycleById = async (req, res, next) => {
  const { bicycleId } = req.params;
  const result = await Bicycle.findByIdAndDelete(bicycleId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "Bicycle deleted" });
};

const updateStatusBicycle = async (req, res, next) => {
  const { bicycleId } = req.params;
  const result = await Bicycle.findByIdAndUpdate(bicycleId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = {
  getAllBicycles: ctrlWrapper(getAllBicycles),
  getBicycleById: ctrlWrapper(getBicycleById),
  addBicycle: ctrlWrapper(addBicycle),
  deleteBicycleById: ctrlWrapper(deleteBicycleById),

  updateStatusBicycle: ctrlWrapper(updateStatusBicycle),
};
