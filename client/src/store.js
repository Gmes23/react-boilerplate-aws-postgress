import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

//debugger for redux
import logger from 'redux-logger'

export const history = createHistory()

const initialState = {
  auth: {
    user: null,
    isAuth: false,
  },
  shoppingCart: {
    cart: {}
  }
}
console.log(initialState)

const enhancers = []
const middlewares = [
  thunk,
  routerMiddleware(history),
  logger
]

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
)

export default createStore(
  rootReducer,
  initialState,
  composedEnhancers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

