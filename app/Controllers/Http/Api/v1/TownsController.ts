import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Town from 'App/Models/Town'

export default class TownsController {
    public async getAll({response}: HttpContextContract) {
        try {
            const towns = await Town.query().select('name')
            return response.status(200).send({
                "towns": towns
            })
        } catch (error) {
            return response.status(400).send(error)
        }
    }

    public async getTownDistrict({params, response}: HttpContextContract) {
        try {
            const name = decodeURI(params.name.toUpperCase())
            const town = await Town.findBy("name", name)
            const districts = await town?.related('districts').query().select('name')
            return response.status(200).send({
                "town": town?.name,
                "districts": districts
            })
        } catch (error) {
            return response.status(400).send(error)
        }
    }

    public async getTownNeighborhoods({params, response}: HttpContextContract) {
        try {
            const name = decodeURI(params.name.toUpperCase())
            const town = await Town.findBy("name", name)
            const neighborhoods = await town?.related('neighborhoods').query().select('name')
            return response.status(200).send({
                "town": town?.name,
                "neighborhoods": neighborhoods
            })
        } catch (error) {
            
        }
    }
}
