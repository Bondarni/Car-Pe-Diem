const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => res.send('Root Page'))

router.get('/vehicle', controllers.getAllVehicles)
router.post('/vehicle', controllers.createVehicle)

module.exports = router
