const express = require('express');
const axios = require('axios');

//utils
const passport = require('../utils/auth/local');
const send = require('../utils/send');

//controllers
const { res } = require('./controller');



const nytRouter = express.Router();


// homes routes
nytRouter.get('/', res, send);



module.exports = nytRouter
