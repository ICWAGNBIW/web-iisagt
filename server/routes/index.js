const Router = require('express')
const router = new Router()
const eventRouter = require('./eventRouter')
const userRouter = require('./usersRouter')

router.use('/event', eventRouter) 
router.use('/user', userRouter)

module.exports = router