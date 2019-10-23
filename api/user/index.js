const express = require('express')
const passport = require('../utils/auth/local')
const send = require('../utils/send')
const {
  dash,
  verify,
  create,
  logout
} = require('./controller')
const {
  shouldBeLoggedIn,
  shouldBeLoggedOut
} = require('./middlewares')

const userRouter = express.Router()

userRouter.get('/', shouldBeLoggedIn, dash, send)
userRouter.get('/verify', verify, send)
userRouter.get('/logout', shouldBeLoggedIn, logout, send,
function(req ) {

  console.log('this is hitting hte /logout')
})


userRouter.post('/register', shouldBeLoggedOut, create, send)
userRouter.post('/login', shouldBeLoggedOut, passport.authenticate('local', {
  successRedirect: '/api/user/verify',
  failureRedirect: '/api/user/verify',
  failureFlash: true
}))

// this was writting by me to log out a users
// userRouter.get('/logout', function(req, res) {
//   req.logOut();
  
// }, send

// )

module.exports = userRouter
