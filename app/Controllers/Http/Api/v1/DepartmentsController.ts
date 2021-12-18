import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Department from 'App/Models/Department'
import Neighborhood from 'App/Models/Neighborhood';

export default class DepartmentsController {

    public async getAll({ response }: HttpContextContract) {
        try {
            const departments = await Department.query().select('name')
            return response.status(200).send({
                "department": departments
            });
        } catch (error) {
            return response.status(400).send(error)
        }
    }

    public async getDepartmentTown({params, response}: HttpContextContract) {
        try {
            const name = decodeURI(params.name.toUpperCase())
            const department = await Department.findBy('name', name)
            const towns = await department?.related('towns').query().select('name')
            return response.status(200).send({
                "department": department?.name,
                "towns": towns
            });
        } catch (error) {
            return response.status(400).send(error)
        }
    }

    public async getDepartmentDistricts({ params, response }: HttpContextContract) {
        try {
            const name = decodeURI(params.name.toUpperCase())
            const department = await Department.findBy('name', name)
            const districts = await department?.related('districts').query()
                .select('name')
            return response.status(200).send({
                "department": department?.name,
                "districts": districts
            });
        } catch (error) {
            return response.status(400).send(error)
        }
    }

    public async getDepartmentNeighborhoods({params, response}: HttpContextContract) {
        try {
            const name = decodeURI(params.name.toUpperCase())
            const department = await Department.findBy('name', name)
            const neighborhoods = await Neighborhood.query()
                .join('districts', 'districts.id', 'neighborhoods.district_id')
                .join('towns', 'towns.id', 'districts.town_id')
                .join('departments', 'departments.id', 'towns.department_id')
                .where('departments.name', name)
                .select('neighborhoods.name')
            return response.status(200).send({
                "department": department?.name,
                "neighborhoods": neighborhoods
            });
        } catch (error) {
            return response.status(400).send(error)
        }
    }
}
