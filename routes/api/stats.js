const express = require("express");
const ctrl = require("../../controllers/bicycles");

const router = express.Router();


router.get("/", ctrl.getAllStats);

module.exports = router;
