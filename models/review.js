const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    vehicleId: { type: Schema.Types.ObjectId, ref: 'Vehicle' },
    part: { type: String, required: false },
    description: { type: String, required: false },
    shop: { type: String, required: false },
    cost: { type: Number, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Review', Review)
