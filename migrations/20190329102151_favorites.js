
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', table => {
    table.increments('id').primary()
    table.string('listings_id')
    table.string('username_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorites')
}
