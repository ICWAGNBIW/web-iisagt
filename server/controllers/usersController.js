const bcrypt = require('bcrypt')
const { User } = require('../models/models')
const jwt = require('jsonwebtoken')

const ApiError = require("../error/ApiError")

// создаем обработчики для роутеров
class UserController {
  /*async create(req, res) { 
    try {
      const { firstName, lastName, email, password, role} = req.body
      const user = await User.create({ firstName, lastName, email, password, role})

      return res.json(user)


    } catch(e) {
    next(ApiError.badRequest(e.message))
    }
  }*/

  async getAll(req, res) {
    let users;
      users = await User.findAll()
   
    return res.json(users)
  }
 /* async getOne(req, res) {
    const {id} = req.params
    const user = await User.findOne(
        {where: {id}}
    )
    return res.json(user)
  }*/

  async registration(req, res, next) {
    const {firstName, lastName, email, password, role} =req.body
    if (!email || !password || !firstName || !lastName ){
        return next(ApiError.badRequest("Введены некорректные данные"))
    }
    const candidate = await User.findOne({where: {email}})
    if(candidate) {
        return next(ApiError.badRequest("Пользователь с таким email уже существует"))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = User.create({firstName, lastName, email, password: hashPassword, role })
    //basket?
    const token = jwt.sign({id: user.id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})

    return res.json({token})

  }

  async login(req, res, next) {
    const {email, password} = req.body
    const user = await User.findOne({where: {email}})
    if(!user) {
        return next(ApiError.internal('Пользователь не найден'))
    }
    let passwordEqual = bcrypt.compareSync(password, user.password)
    if(!passwordEqual) {
        return next(ApiError.internal('Неверный пароль'))
    }
    const token = jwt.sign({id: user.id, email: user.email, role: user.role}, process.env.SECRET_KEY, {expiresIn: '24h'})

    return res.json({token})
  }

  async check(req, res, next) {
    const token = jwt.sign(req.user.id, req.user.email, req.user.role,  process.env.SECRET_KEY, {expiresIn: '24h'})

    return res.json({token})
}
}


module.exports = new UserController()