const Router = require('express')
const router = new Router()
const AdressController = require('../controllers/AdressController')

router.post('/building', AdressController.createBuiding) 
router.get('/building/all', AdressController.getAllBuildings) 
router.get('/building/:id',AdressController.getOneBuilding)


router.post('/auditorium', AdressController.createAuditorium) 
router.get('/auditorium/all', AdressController.getAllAuditoriums) 
router.get('/auditorium/:id',AdressController.getOneAuditorium)

module.exports = router