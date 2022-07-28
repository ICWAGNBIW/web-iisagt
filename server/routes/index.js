const Router = require('express')
const router = new Router()
const eventRouter = require('./eventRouter') // импортируем роутер для его использования

router.use('/event', eventRouter) // указываем что будет обрабатываться в этом роутере 

module.exports = router