const Router = require('express')
const router = new Router()
const StuffController = require('../controllers/StuffController')

router.post('/', StuffController.create) // добавление записи в бд
router.get('/all', StuffController.getAll) // получение всех записей из бд
router.get('/:id',StuffController.getOne)

module.exports = router