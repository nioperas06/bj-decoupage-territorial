import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Neighborhood from 'App/Models/Neighborhood'

export default class NeighborhoodsController {
    public async getNeighborhoods({request, response}: HttpContextContract) {
        const page = request.qs().page ?? 1 
        const page_size = request.qs().page_size ?? 20
        const neighborhoods = await Neighborhood.query().select('name').paginate(page, page_size)
        const neighborhoodsMeta = neighborhoods.getMeta()
        const neighborhoodsData = neighborhoods.toJSON().data
        return response.status(200).send({
            "total": neighborhoodsMeta.total,
            "per_page": neighborhoodsMeta.per_page,
            "page": neighborhoodsMeta.current_page,
            "last_page": neighborhoodsMeta.last_page,
            "data": neighborhoodsData
        })
    }
}
