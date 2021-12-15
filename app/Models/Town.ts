import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, HasManyThrough, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import Department from './Department'
import District from './District'
import Neighborhood from './Neighborhood'

export default class Town extends BaseModel {

    @column({ isPrimary: true })
    public id: number

    @column()
    public name: string

    @column()
    public department_id: number

    @hasMany(() => District, {foreignKey: 'town_id'})
    public districts: HasMany<typeof District>

    @hasManyThrough([() => Neighborhood, () => District], {
        foreignKey: "town_id",
        throughForeignKey: "district_id"
    })
    public neighborhoods: HasManyThrough<typeof Neighborhood>

    @belongsTo(() => Department, { foreignKey: 'department_id' })
    public department: BelongsTo<typeof Department>
}
