'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RatingsSchema extends Schema {
  up() {
    this.create('ratings', (table) => {
      table.increments()
      table.string('title_id').index().unique()
      table
        .foreign('title_id')
        .references('code')
        .on('titles')
        .onUpdate('cascade')
        .onDelete('cascade')
      table.string('average_rating')
      table.integer('num_votes')
      table.timestamps()
    })
  }

  down() {
    this.drop('ratings')
  }
}

module.exports = RatingsSchema
