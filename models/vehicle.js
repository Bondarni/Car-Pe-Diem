const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Vehicle = new Schema(
  {
    imageURL: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: Number, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    color: { type: String, required: true },
    mileage: { type: Number, required: true },
    fuel: { type: String, required: true },
    features: [{ type: String, required: true }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Vehicle', Vehicle)
