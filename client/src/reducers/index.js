import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { auth } from './auth'
import shoppingCart from './shoppingCart'

export default combineReducers({
  routing: routerReducer,
  auth,
  item: shoppingCart
})
