import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import District from 'App/Models/District'

export default class DistrictsController {

    public async getAll({response}: HttpContextContract) {
        try {
            const districts = await District.query().select('name')
            return response.status(200).send({
                "districts": districts
            })
        } catch (error) {
            return response.status(400).send(error)
        }
    }

    public async getDistrictNeighborhoods({params, response}) {
        try {
            const name = decodeURI(params.name.toUpperCase())
            const district = await District.findBy("name", name)
            const neighborhoods = await district?.related('neighborhoods').query().select('name')
            return response.status(200).send({
                "district": district?.name,
                "neighborhoods": neighborhoods
            })
        } catch (error) {
            return response.status(400).send(error)
        }
    }

}
