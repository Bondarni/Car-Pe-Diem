const NewSchema = require('../models/schemaTemplate')

const doThing = async (req, res) => {
  try {
    //things doThing will do
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
  doThing,
  doOtherThing
}
