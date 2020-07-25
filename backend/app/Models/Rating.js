'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rating extends Model {
  static get table() {
    return 'ratings'
  }
}

module.exports = Rating
