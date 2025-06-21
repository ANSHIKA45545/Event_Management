const { Schema , model} = require("mongoose");

const serviceSchema = new Schema({
  title: { type: String, required: true },
  instructor: { type: String, required: true }, 
  // photo: { type: String }, 
  time: { type: Date, required: true },
  destination: { type: String, required: true },
});

const Service = new model ("Service" , serviceSchema);
module.exports = Service;