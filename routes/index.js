const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => res.send('Root Page'))

router.get('/schemaTemplate', controllers.doThing)

module.exports = router
