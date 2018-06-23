'use strict'

const Schema = use('Schema')

class DistrictSchema extends Schema {
  up () {
    this.create('districts', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.integer('town_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('districts')
  }
}

module.exports = DistrictSchema
