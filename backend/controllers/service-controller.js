const Service = require("../model/service-model");

// Create a new service/event
const createService = async (req, res) => {
  try {
    console.log("Request body:", req.body); 
    const newService = new Service(req.body);
    await newService.save();
    res.status(201).json({ message: "Service created successfully", newService });
  } catch (error) {
    console.error("Create service error:", error);
    res.status(500).json({ message: "Failed to create service" });
  }
};

// Get all services/events
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({ services });
  } catch (error) {
    console.error("Fetch services error:", error);
    res.status(500).json({ message: "Error fetching services" });
  }
  };

// Delete a specific service/event
const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    console.error("Delete service error:", error);
    res.status(500).json({ message: "Error deleting service" });
  }
};

module.exports = {
  createService,
  getAllServices,
  deleteService,
};
