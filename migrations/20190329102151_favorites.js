
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', table => {
    table.increments('id').primary()
    table.integer('listings_id')
    table.integer('users_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorites')
}
