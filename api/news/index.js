const express = require('express');
const axios = require('axios');

//utils
const send = require('../utils/send');

//controllers
const { 
    res,
    favorite
 } = require('./controller');



const newsRouter = express.Router();


// homes routes
newsRouter.get('/', res, send);

// Gets articles from NEWSAPI.ORG
newsRouter.get('/favorite', favorite, send);




module.exports = newsRouter
