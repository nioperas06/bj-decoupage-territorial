'use strict'

const Model = use('Model')

class Neighborhood extends Model {
  static get hidden () {
    return ['district_id']
  }
}

module.exports = Neighborhood
