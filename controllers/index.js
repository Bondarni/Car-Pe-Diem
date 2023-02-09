const Vehicle = require('../models/vehicle')

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
  getAllVehicles
}
