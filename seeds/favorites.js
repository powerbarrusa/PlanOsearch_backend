
exports.seed = function(knex, Promise) {
  return knex('favorites').del()
    .then(function () {
      return knex('favorites').insert([
        {id: 1, listings_id: 3, users_id: 1},
        {id: 2, listings_id: 1, users_id: 1}
      ])
    })
  }
