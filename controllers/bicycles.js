const { Bicycle } = require("../models/bicycleModel");
const { HttpError, ctrlWrapper } = require("../helpers");
const  STATUSES  = require("../constants");


const getAllBicycles = async (req, res, next) => {
  
  const result = await Bicycle.find();
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

const getAllStats = async (req, res, next) => {
   
  const result = await Bicycle.find();
  const total = result.length;
  const available = result.filter(
    (item) => item.status === STATUSES.AVAILABLE
  ).length;
  const booked = result.filter((item) => item.status === STATUSES.BUSY).length;
  let averagePrice = 0;
  if (total > 0) {
    const grandTotal = result.reduce(
      (acc, bicycle) => (acc += bicycle.price),
      0
    );
    averagePrice = Number((grandTotal / total).toFixed(2));
  }
  res.status(200).json({ total, available, booked, averagePrice });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAllBicycles: ctrlWrapper(getAllBicycles),
  getBicycleById: ctrlWrapper(getBicycleById),
  addBicycle: ctrlWrapper(addBicycle),
  deleteBicycleById: ctrlWrapper(deleteBicycleById),
  updateStatusBicycle: ctrlWrapper(updateStatusBicycle),
  getAllStats: ctrlWrapper(getAllStats),
};
