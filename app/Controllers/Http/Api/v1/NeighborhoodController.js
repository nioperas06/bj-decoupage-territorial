'use strict'
const Neighborhood = use('App/Models/Neighborhood')

class NeighborhoodController {

  async index({ response }) {
    let neighborhoods = await Neighborhood.all()
    return response.status(200).json(neighborhoods)
  }

}

module.exports = NeighborhoodController
