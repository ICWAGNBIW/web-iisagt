const Router = require('express')
const router = new Router()
const UsersController = require('../controllers/usersController')
const authMid = require('')

router.post('/registration', UsersController.registration) // добавление записи в бд
router.post('/login', UsersController.login)
router.get('/all', UsersController.getAll) // получение всех записей из бд
router.get('/auth', authMid, UsersController.checksa)
//router.get('/:id',UsersController.getOne)

module.exports = router