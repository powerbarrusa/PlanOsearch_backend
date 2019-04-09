
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'barr@covrigaru.com', password: 'pass'},
        {id: 2, username: 'barr@planomatic.com', password: 'planomatic'}
      ])
    })
  }
