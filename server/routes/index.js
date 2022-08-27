const Router = require('express')
const router = new Router()
const eventRouter = require('./eventRouter')
const userRouter = require('./usersRouter')
const depRouter =require('./depRouter')
const stuffRouter =require('./StuffRouter')
const adressRouter = require('./adressRouter')

router.use('/event', eventRouter) 
router.use('/user', userRouter)
router.use('/department', depRouter)
router.use('/stuff', stuffRouter)
router.use('/adress', adressRouter)

module.exports = router