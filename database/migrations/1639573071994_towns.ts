import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Towns extends BaseSchema {
  protected tableName = 'towns'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.integer('department_id').unsigned().notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
