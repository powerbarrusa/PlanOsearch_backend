
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'barr@covrigaru.com', password: 'pass'},
        {id: 2, username: 'barr@planomatic.com', password: 'planomatic'}
      ])
    })
  }
