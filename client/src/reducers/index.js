import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { auth } from './auth'
import { shoppingCart_reducer } from './shoppingCart_reducer'

export default combineReducers({
  routing: routerReducer,
  auth,
  shoppingCart_reducer
})
