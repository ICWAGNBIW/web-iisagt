
const { Stuff } = require('../models/models')

const ApiError = require("../error/ApiError")

class StuffController {
  async create(req, res, next) {
                                                                       
    try {
      const { 
      name,
      patronymic,
      surname,
      position,
      qualification,
      academicDegree,
      academicTitle,
      phacademicTitleone,
      email,
      phone,
      photo_path} = req.body
      const stuff = await Stuff.create({name, patronymic, surname, position, qualification, academicDegree, academicTitle, phacademicTitleone, email, phone, photo_path})

      return res.json(stuff)


    } catch(e) {
      return next(ApiError.badRequest(e.message))
    }
  }

 
  async getAll(req, res) {
    let stuff;
    stuff = await Stuff.findAll()
    return res.json(stuff)
  }


  async getOne(req, res) {
    const {id} = req.params
    const stuff = await Stuff.findOne(
        {where: {id}}
    )
    return res.json(stuff)
  }

}


module.exports = new StuffController()