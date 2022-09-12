
const { Auditorium } = require('../models/models')

const { Building } = require('../models/models')


const ApiError = require("../error/ApiError")

class AdressController {
  async createBuiding(req, res, next) {
                                                                       
    try {
      const {id, adress}= req.body
      const building = await Building.create({id, adress})

      return res.json(building)


    } catch(e) {
      return next(ApiError.badRequest(e.message))
    }
  }

 
  async getAllBuildings(req, res) {
    let buildings;
    buildings = await Building.findAll()
    return res.json(buildings)
  }


  async getOneBuilding(req, res) {
    const {id} = req.params
    const building = await Building.findOne(
        {where: {id}}
    )
    return res.json(department)
  }

  async createAuditorium(req, res, next) {
                                                                       
    try {
      const {auditorium_number, floor, building}= req.body
      const auditorium = await Auditorium.create({auditorium_number, floor, building})

      return res.json(auditorium)


    } catch(e) {
      return next(ApiError.badRequest(e.message))
    }
  }

 
  async getAllAuditoriums(req, res) {
    let auditoriums;
    auditoriums = await Auditorium.findAll()
    return res.json(auditoriums)
  }


  async getOneAuditorium(req, res) {
    const {id} = req.params
    const auditorium = await Auditorium.findOne(
        {where: {id}}
    )
    return res.json(auditorium)
  }

}


module.exports = new AdressController()