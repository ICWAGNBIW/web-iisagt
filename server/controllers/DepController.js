
const { Department } = require('../models/models')

const ApiError = require("../error/ApiError")

class DepController {
  async create(req, res, next) {
                                                                       
    try {
      const { 
      title,
      description,
      subject,
      headOfDep,
      headOfUMR,
      headOfUVR,
      email,
      phone,
      adress} = req.body
      const department = await Department.create({title, description, subject, headOfDep, headOfUMR, headOfUVR, email, phone, adress})

      return res.json(department)


    } catch(e) {
      return next(ApiError.badRequest(e.message))
    }
  }

 
  async getAll(req, res) {
    let departments;
    departments = await Department.findAll()
    return res.json(departments)
  }


  async getOne(req, res) {
    const {id} = req.params
    const department = await Department.findOne(
        {where: {id}}
    )
    return res.json(department)
  }

}


module.exports = new DepController()