require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})


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

// All fetch request directly from react components need /api before route name
app.get('/api/savedArticles', (request, response) => {
  
  const userID = request.user.id

  pool.query('SELECT * FROM products WHERE user_id=$1', [userID], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
})

app.delete('/api/deleteArticles', (request, response) => {
  
  // Gets the product ID from the front end and matches it to one in the database
  const productID = request.body.item.pid

  pool.query('DELETE FROM products WHERE pid=$1', [productID], (error, results) => {
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

