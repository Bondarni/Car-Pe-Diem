const Vehicle = require('../models/vehicle')
const Review = require('../models/review')

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createVehicle = async (req, res) => {
  try {
    const vehicle = await new Vehicle(req.body)
    await vehicle.save()
    return res.status(201).json({
      vehicle
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()
    return res.status(200).json({ vehicles })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createVehicle,
  createReview,
  getAllVehicles
}