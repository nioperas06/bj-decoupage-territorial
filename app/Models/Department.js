'use strict'

const Model = use('Model')

class Department extends Model {
  towns() {
    return this.hasMany('App/Models/Town')
  }

  districts() {
    return this.manyThrough('App/Models/Town', 'districts')
  }

  neighborhoods() {
    return this.manyThrough('App/Models/Town', 'neighborhoods')
  }

  static get hidden () {
    return ['id']
  }
}

module.exports = Department
