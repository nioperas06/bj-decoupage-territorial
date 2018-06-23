'use strict'
const Department = use('App/Models/Department')

class DepartmentController {

  async index({ response }) {
    let departments = await Department.all()
    return response.status(200).json(departments)
  }

  async findTowns({ params, response }) {
    try {
      const department = await Department.findBy(
        'name', params.name.toUpperCase()
      )
      const towns = await department.towns().fetch()
      return response.status(200).json(towns)
    } catch (error) {
      return response.status(400).json({
        'error': {
          'status': 400,
          'message': 'The requested resource was not found.'
        }
      })
    }
  }

  async findDistricts({ params, response }) {
    try {
      const department = await Department.findBy(
        'name', params.name.toUpperCase()
      )
      const districts = await department.districts().fetch()
      return response.status(200).json(districts)
    } catch (error) {
      return response.status(400).json({
        'error': {
          'status': 400,
          'message': 'The requested resource was not found.'
        }
      })
    }
  }

  findNeighborhoods({ response }) {
    return response.json([])
  }

}

module.exports = DepartmentController
