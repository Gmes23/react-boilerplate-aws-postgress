require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
//testing this 
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})


// i added this here
app.use(cors())


app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())


app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.use(express.static('public'))

app.use('/api', require('./api'))


//db request 
const pool = require('./db/configForUserData.js')

app.get('/savedArticles', (request, response) => {
  pool.query('SELECT * FROM products', (error, results) => {
      console.log(results)
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
})


app.use('*', (req, res) => {
  res.status(404).send('Not Found')
})

app.use((err, req, res, next) => {
  console.warn(err)
  res.status(500).json({ error: err, message: err.message })
})

