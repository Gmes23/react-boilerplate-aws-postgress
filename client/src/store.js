import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export const history = createHistory()

const initialState = {
  auth: {
    user: null,
    isAuth: false,
  },
  item: {}
}
console.log(initialState, 'this is the initial state from store')

const enhancers = []
const middlewares = [
  thunk,
  routerMiddleware(history),
]

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  window.__REDUX_DEVTOOLS_EXTENSION__({ serialize: true, trace: true })
)

export default createStore(
  rootReducer,
  initialState,
  composedEnhancers,
)

