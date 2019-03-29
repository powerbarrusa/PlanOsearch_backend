
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        {id: 1, listings_id: '', username_id: ''},
        {id: 2, listings_id: '', username_id: ''}
      ])
    })
}
