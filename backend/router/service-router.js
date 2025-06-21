const express = require("express");
const router = express.Router();
const {
  createService,
  getAllServices,
  deleteService,
} = require("../controllers/service-controller");

// POST: create a new service/event
router.post("/service", createService);

// GET: fetch all services/events
router.get("/service", getAllServices);

// DELETE: delete a service/event
router.delete("/service/:id", deleteService);

module.exports = router;
