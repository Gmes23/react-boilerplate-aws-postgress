require('dotenv').config()

const options = {
  query: (e) => {
    console.log(e.query, 'this is e.query from config.js')
  }
}

const pgp = require('pg-promise')(options)

function setDatabase() {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database: process.env.LOCAL_DATABASE_NAME,
      port: 5432,
      host: 'localhost',
      user: 'me',
      password: 'password'
    })
  } else if (process.env.NODE_ENV === 'production') {
    return pgp(process.env.DATABASE_URL)
  }
}

const db = setDatabase()

module.exports = db
