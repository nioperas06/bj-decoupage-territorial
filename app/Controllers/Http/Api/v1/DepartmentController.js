'use strict'
const Department = use('App/Models/Department')
const Database = use('Database')

class DepartmentController {

  async index({ response }) {
    let departments = await Department.all()
    return response.status(200).json({
      'departments': departments
    })
  }

  async findTowns({ params, response }) {
    try {
      const department = await Department.findBy(
        'name', params.name.toUpperCase()
      )
      const towns = await department.towns().fetch()
      return response.status(200).json({
        'department': department.name,
        'towns': towns
      })
    } catch (e) {
      return response.status(400).json(JSON.stringify(e))
    }
  }

  async findDistricts({ params, response }) {
    try {
      const department = await Department.findBy(
        'name', params.name.toUpperCase()
      )
      const districts = await department.districts().fetch()
      return response.status(200).json({
        'department': department.name,
        'districts': districts
      })
    } catch (e) {
      return response.status(400).json(JSON.stringify(e))
    }
  }

  async findNeighborhoods({ params, response }) {
    try {
      const department = await Department.findBy(
        'name', params.name.toUpperCase()
      )

      const neighborhoods = await Database
        .select('neighborhoods.name')
        .table('neighborhoods')
        .innerJoin('districts', 'districts.id', 'neighborhoods.district_id')
        .innerJoin('towns', 'towns.id', 'districts.town_id')
        .innerJoin('departments', 'departments.id', 'towns.department_id')
        .where('departments.name', department.name)

      return response.status(200).json({
        'department': department.name,
        'neighborhoods': neighborhoods
      })
      
    } catch (e) {
      return response.status(400).json(JSON.stringify(e))
    }
  }
}

module.exports = DepartmentController
