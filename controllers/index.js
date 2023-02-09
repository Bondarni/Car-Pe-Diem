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

const doOtherThing = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createVehicle,
  doOtherThing
}
