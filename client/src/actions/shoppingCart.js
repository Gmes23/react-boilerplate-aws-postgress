// actions for the shopping cart which show in every page

// import * as TYPES from '../constants/ActionTypes'
// import { SET_ITEM, ADD_ITEM, DELETE_ITEM }from '../constants/ActionTypes';


// export const setItem = (item) => (console.log('this is', item ), {
//     type: TYPES.SET_ITEM,
//     item,
// }, console.log('rewrwe'))

export const resolvedAddItem = (item) => {
    return {
      type: 'ADD_ITEM',
      item: item
    }
  }

export const addItem = (item) => dispatch => {
    console.log(item, ' this is the additem reducer in shoppingcart.js')
    return fetch('/api/news/favorite', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ item })
  })
  .then(console.log('2354234234', response => response.json()))
  .then(item => dispatch(resolvedAddItem(item)))
   .then(console.log('hello'))
}

// export const addItem = item => dispatch => {
//     console.log(item)
//     fetch('/api/news/favorite', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ item })
//     })
//     .then(res => res.json())
//     .catch(err => console.log(err))

//     console.log(dispatch, ' hit additem')
// }
  
// export const addItem = (item) => (dispatch) => {
//     return dispatch(
//         setItem(item))
//  }



// export const addItem = (item) => (dispatch) => {
//     console.log("this is additem dispatch")
//     return dispatch(
//     console.log("this is additem dispatch"),
        
//         {
//         type: TYPES.ADD_ITEM,
//         cart: item
//     })
//  }

// export const addItem = (item) => (dispatch) => {
//     console.log('fetchjing');

//     return dispatch({
//         type: ADD_ITEM,
//         payload: item
//     })
//  }