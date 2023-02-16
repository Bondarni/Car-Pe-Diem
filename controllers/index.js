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

const updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(vehicle)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Vehicle.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Vehicle Scrapped')
    }
    throw new Error('Vehicle not found')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params
    const deleted = await Review.findByIdAndDelete(reviewId)
    // if (deleted) {
    //   return res.status(200).send('Review Scrapped')
    // }
    // throw new Error('Review not found')
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

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ vehicleId: req.params.id })
    return res.status(200).json({ reviews })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getVehicleById = async (req, res) => {
  try {
    const vehicles = await Vehicle.findById()
    return res.status(200).json({ vehicles })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createVehicle,
  createReview,
  getAllVehicles,
  updateVehicle,
  deleteVehicle,
  deleteReview,
  getVehicleById,
  getAllReviews
}
