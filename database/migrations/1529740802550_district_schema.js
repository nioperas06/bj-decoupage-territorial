'use strict'

const Schema = use('Schema')

class DistrictSchema extends Schema {
  up () {
    this.create('districts', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('town_id').unsigned()
    })
  }

  down () {
    this.drop('districts')
  }
}

module.exports = DistrictSchema
