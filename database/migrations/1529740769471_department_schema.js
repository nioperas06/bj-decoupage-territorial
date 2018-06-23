'use strict'

const Schema = use('Schema')

class DepartmentSchema extends Schema {
  up () {
    this.create('departments', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
    })
  }

  down () {
    this.drop('departments')
  }
}

module.exports = DepartmentSchema
