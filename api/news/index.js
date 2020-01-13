const express = require('express');
const axios = require('axios');

//db
const db = require('../../db/config')


//utils
const send = require('../utils/send');

//controllers
const { 
    favorite,
 } = require('./controller');



const newsRouter = express.Router();


// Saves articles to user table 
newsRouter.post('/favorite', favorite, send);


module.exports = newsRouter
