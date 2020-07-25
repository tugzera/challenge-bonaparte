'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TitlesSchema extends Schema {
  up () {
    this.create('titles', (table) => {
      table.integer('id')
      table.string('code').unique().primary()
      table.string('title_type')
      table.string('primary_title', 500)
      table.string('original_title', 500)
      table.boolean('is_adult')
      table.integer('start_year', 4)
      table.integer('end_year', 4)
      table.integer('runtime')
      table.string('genres')
    })
  }

  down () {
    this.drop('titles')
  }
}

module.exports = TitlesSchema
