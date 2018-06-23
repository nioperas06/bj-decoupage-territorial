'use strict'
const District = use('App/Models/District')

class DistrictController {

  async index({ response }) {
    let districts = await District.all()
    return response.status(200).json({
      'districts': districts
    })
  }

  async findNeighborhoods({ params, response }) {
    try {
      const district = await District.findBy(
        'name', params.name.toUpperCase()
      )
      const neighborhoods = await district.neighborhoods().fetch()
      return response.status(200).json({
        'district': district.name,
        'neighborhoods': neighborhoods
      })
    } catch (e) {
      return response.status(400).json(JSON.stringify(e))
    }
  }
}

module.exports = DistrictController
