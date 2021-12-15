import { BaseModel, column, hasMany, HasMany, HasManyThrough, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import District from './District'
import Town from './Town'

export default class Department extends BaseModel {

    @column({ isPrimary: true })
    public id: number

    @column()
    public name: string

    @hasMany(() => Town, { foreignKey: 'department_id' })
    public towns: HasMany<typeof Town>

    @hasManyThrough([() => District, () => Town], { 
        foreignKey: 'department_id',
        throughForeignKey: 'town_id'
    })
    public districts: HasManyThrough<typeof District>
}
