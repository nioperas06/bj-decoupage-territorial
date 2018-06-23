'use strict'

const Schema = use('Schema')

class TownSchema extends Schema {
  up () {
    this.create('towns', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.integer('department_id').unsigned()
    })
  }

  down () {
    this.drop('towns')
  }
}

module.exports = TownSchema
