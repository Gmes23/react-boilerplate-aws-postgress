const express = require('express')
const axios = require('axios');

//utils
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

const userRouter = express.Router();



// Routes for the api New York Times



// homes routes
userRouter.get('/', shouldBeLoggedIn, dash, send)
// verifying user
userRouter.get('/verify', verify, send)
// logouts the user
userRouter.get('/logout', shouldBeLoggedIn, logout, send)

userRouter.post('/register', shouldBeLoggedOut, create, send)
// logs in the user and veries the user in the database
userRouter.post('/login', shouldBeLoggedOut, passport.authenticate('local', {
  successRedirect: '/api/user/verify',
  failureRedirect: '/api/user/verify',
  failureFlash: true
}))




// userRouter.get('*', function(req, res){
//   res.send('what???', 404);
//   console.log('this is not a valid page ')
// });

module.exports = userRouter
