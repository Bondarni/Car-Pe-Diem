const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Vehicle = new Schema(
  {
    imageURL: { type: String, required: false },
    name: { type: String, required: false },
    year: { type: Number, required: false },
    make: { type: String, required: false },
    model: { type: String, required: false },
    color: { type: String, required: false },
    mileage: { type: Number, required: false },
    fuel: { type: String, required: false },
    features: [{ type: String, required: false }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Vehicle', Vehicle)
