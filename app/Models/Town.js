'use strict'

const Model = use('Model')

class Town extends Model {
  districts() {
    return this.hasMany('App/Models/District')
  }

  neighborhoods() {
    return this.manyThrough('App/Models/District', 'neighborhoods')
  }

  static get hidden () {
    return ['department_id']
  }
}

module.exports = Town
