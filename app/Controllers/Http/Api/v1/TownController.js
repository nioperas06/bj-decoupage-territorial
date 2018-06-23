'use strict'
const Town = use('App/Models/Town')

class TownController {

  async index({ response }) {
    let towns = await Town.all()
    return response.status(200).json({
      'towns': towns
    })
  }

  async findDistricts({ params, response }) {
    try {
      const town = await Town.findBy(
        'name', params.name.toUpperCase()
      )
      const districts = await town.districts().fetch()
      return response.status(200).json({
        'town': town.name,
        'districts': districts
      })
    } catch (e) {
      return response.status(400).json(JSON.stringify(e))
    }
  }

  async findNeighborhoods({ params, response }) {
    try {
      const town = await Town.findBy(
        'name', params.name.toUpperCase()
      )
      const neighborhoods = await town.neighborhoods().fetch()
      return response.status(200).json({
        'town': town.name,
        'neighborhoods': neighborhoods
      })
    } catch (e) {
      return response.status(400).json(JSON.stringify(e))
    }
  }
}

module.exports = TownController
