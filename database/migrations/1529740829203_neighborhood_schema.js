'use strict'

const Schema = use('Schema')

class NeighborhoodSchema extends Schema {
  up () {
    this.create('neighborhoods', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('district_id').unsigned()
    })
  }

  down () {
    this.drop('neighborhoods')
  }
}

module.exports = NeighborhoodSchema
