'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Title extends Model {
  static get table() {
    return 'titles'
  }

  static get incrementing() {
    return false
  }

  static get createdAtColumn () {
    return null
  }
 
  static get updatedAtColumn () {
    return null
  }

  rating() {
    return this.hasOne('App/Models/Rating', 'code', 'title_id')
  }
}

module.exports = Title
