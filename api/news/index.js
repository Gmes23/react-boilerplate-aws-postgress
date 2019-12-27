const express = require('express');
const axios = require('axios');

//utils
const send = require('../utils/send');

//controllers
const { 
    res,
    favorite,
    savedArticles
 } = require('./controller');



const newsRouter = express.Router();


// homes routes
newsRouter.get('/', res, send);

// Gets articles from NEWSAPI.ORG
newsRouter.post('/favorite', favorite, send);

// Gets user data, this may be moved to user actions folder, 
// were we place all of what a user can do in our app 
//will change during reformating 
newsRouter.get('/savedArticles', savedArticles, send);




module.exports = newsRouter
