import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Neighborhood from './Neighborhood'
import Town from './Town'

export default class District extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public name: string

    @column()
    public town_id: number

    @belongsTo(() => Town, { foreignKey: 'town_id' })
    public town: BelongsTo<typeof Town>

    @hasMany(() => Neighborhood, {
        foreignKey: "district_id"
    })
    public neighborhoods: HasMany<typeof Neighborhood>
}
