const express = require('express');
const axios = require('axios');

//utils
const send = require('../utils/send');

//controllers
const { res } = require('./controller');



const newsRouter = express.Router();


// homes routes
newsRouter.get('/', res, send);

// Gets articles from NEWSAPI.ORG
newsRouter.get('/newsArticles', res, send);




module.exports = nytRouter
