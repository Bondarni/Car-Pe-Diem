const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Root Page'))

router.post('/vehicle', controllers.createVehicle)
router.get('/vehicle', controllers.getAllVehicles)
router.get('/vehicle/:id', controllers.getVehicleById)
router.post('/vehicle/:id/reviews', controllers.createReview)
router.get('/vehicle/:id/reviews', controllers.getAllReviews)
router.put('/vehicle/:id', controllers.updateVehicle)
router.delete('/vehicle/:id', controllers.deleteVehicle)

module.exports = router
