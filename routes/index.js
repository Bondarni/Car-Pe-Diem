const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Root Page'))

router.post('/vehicle', controllers.createVehicle)
router.get('/vehicle', controllers.getAllVehicles)
router.post('/review', controllers.createReview)

module.exports = router
