const Router = require('express')
const router = new Router()
const DepController = require('../controllers/DepController')

router.post('/', DepController.create) 
router.get('/all', DepController.getAll) 
router.get('/:id',DepController.getOne)

module.exports = router