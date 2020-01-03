const express = require('express');
const axios = require('axios');

//db
const db = require('../../db/config')


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

// newsRouter.get('/savedArticles', savedArticles, send);
// Gets articles from NEWSAPI.ORG
newsRouter.post('/favorite', favorite, send);

// Gets user data, this may be moved to user actions folder, 
// were we place all of what a user can do in our app 
// this was moved to app ,jhs
newsRouter.get('/savedArticles', (request, response) => {
    db.query('SELECT * FROM user', (error, results) => {
        console.log(results)
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
  })



module.exports = newsRouter
