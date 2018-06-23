'use strict'
const Neighborhood = use('App/Models/Neighborhood')

class NeighborhoodController {

  async index({ request, response }) {
    const page = request.input('page', 1)
    const page_size = request.input('page_size', 20)

    let neighborhoods = await Neighborhood.query().paginate(page, page_size)
    return response.status(200).json(neighborhoods)
  }

}

module.exports = NeighborhoodController
