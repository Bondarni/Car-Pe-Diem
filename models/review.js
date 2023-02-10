const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    vehicleId: { type: Schema.Types.ObjectId, ref: 'Vehicle' },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    rating: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Review', Review)
