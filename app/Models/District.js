'use strict'

const Model = use('Model')

class District extends Model {
  static get hidden () {
    return ['town_id']
  }

  neighborhoods() {
    return this.hasMany('App/Models/Neighborhood')
  }
}

module.exports = District
