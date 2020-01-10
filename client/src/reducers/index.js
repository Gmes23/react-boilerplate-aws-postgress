import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { auth } from './auth'

// This gets the user article state from the 
// article action
import articles from '../actions/articles.js'

export default combineReducers({
  routing: routerReducer,
  auth,
  items: articles
})
