import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Departments extends BaseSchema {
  protected tableName = 'departments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
