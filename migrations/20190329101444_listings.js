
exports.up = function(knex, Promise) {
  return knex.schema.createTable('listings', table => {
    table.increments('id').primary()
    table.string('street')
    table.string('city')
    table.string('state')
    table.integer('zip')
    table.string('beds_baths')
    table.string('sqft')
    table.string('price')
    table.string('iframe')
    table.string('thumbnail')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('listings')
}
