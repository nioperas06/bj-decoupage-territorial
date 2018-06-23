'use strict'
const Department = use('App/Models/Department')

class DepartmentController {

  async index({ response }) {
    let departments = await Department.all()
    return response.status(200).json(departments)
  }

  findTowns({ response }) {
    return response.json([])
  }

  findDistricts({ response }) {
    return response.json([])
  }

  findNeighborhoods({ response }) {
    return response.json([])
  }

}

module.exports = DepartmentController
