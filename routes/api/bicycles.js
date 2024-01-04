const express = require("express");
const ctrl = require("../../controllers/bicycles");
const {
  validateBody,
  validateStatus,
  isValidId,
} = require("../../middlewares");
const { schemas } = require("../../models/bicycleModel");

const router = express.Router();

router.get("/", ctrl.getAllBicycles);

router.get("/:bicycleId", isValidId, ctrl.getBicycleById);

router.post("/", validateBody(schemas.addSchema), ctrl.addBicycle);

router.delete("/:bicycleId", isValidId, ctrl.deleteBicycleById);

router.patch(
  "/:bicycleId/status",
  isValidId,

  validateStatus(schemas.updateStatusSchema),
  ctrl.updateStatusBicycle
);

router.get("/stats", ctrl.getAllStats);

module.exports = router;
