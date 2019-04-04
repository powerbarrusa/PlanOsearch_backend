
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {id: 1, street: '1088 Navajo Street', city: 'Denver', state: 'Colorado', zip: 80204, beds_baths: '3/4', sqft: '1,500', price: '$500,000', iframe: 'https://planotours.planomatic.com/tour/245071/tourmini', thumbnail: 'https://g2-tour-files.cdn.planomatic.com/245071/1088-navajo-street-denver-us_co-80204/photos/6888225/300w200h/2019-03-27-06-51-46-utc.jpg'},
        {id: 2, street: '3010 Humboldt Street', city: 'Denver', state: 'Colorado', zip: 80205, beds_baths: '3/3', sqft: '1,900', price: '$540,000', iframe: 'https://planotours.planomatic.com/tour/187136/tourmini', thumbnail: 'https://g2-tour-files.cdn.planomatic.com/187136/3010-humboldt-st-denver-us_co-80205/photos/5611080/300w200h/2019-01-10-19-04-02-utc.jpg'}
      ])
    })
}
