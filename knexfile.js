module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/planosearch'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
