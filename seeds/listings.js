
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {id: 1, street: '1088 Navajo Street', city: 'Denver', state: 'Colorado', zip: 80204, beds_baths: '3/4', sqft: '1,500', price: '$500,000', iframe: ''},
        {id: 2, street: '3010 Humboldt Street', city: 'Denver', state: 'Colorado', zip: 80205, beds_baths: '3/3', sqft: '1,900', price: '$540,000', iframe: ''}
      ])
    })
}
