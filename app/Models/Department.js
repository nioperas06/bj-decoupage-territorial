'use strict'

const Model = use('Model')

class Department extends Model {

  towns() {
    return this.hasMany('App/Models/Town')
  }

  districts() {
    return this.hasMany('App/Models/District')
  }
}

module.exports = Department
