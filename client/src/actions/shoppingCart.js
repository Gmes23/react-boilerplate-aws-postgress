// actions for the shopping cart which show in every page

// import * as TYPES from '../constants/ActionTypes'
// import { SET_ITEM, ADD_ITEM, DELETE_ITEM }from '../constants/ActionTypes';


// export const setItem = (item) => (console.log('this is', item ), {
//     type: TYPES.SET_ITEM,
//     item,
// }, console.log('rewrwe'))

// export const resolvedAddItem = (item) => {
//     return {
//       type: 'ADD_ITEM',
//       item: item
//     }
//   }

// export const addItem = (item) => dispatch => {
//     console.log(item, ' this is the additem reducer in shoppingcart.js')
//     return fetch('/api/news/favorite', {
//     credentials: 'include',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ item })
//   })
//   .then(console.log('2354234234', response => response.json()))
//   .then(item => dispatch(resolvedAddItem(item)))
//    .then(console.log('hello'))
// }

// export const addItem = (item, dispatch) => {
//     console.log(item, ' this is the additem reducer in shoppingcart.js')

//     return fetch('/api/news', {
//         credentials: 'include',
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ item })
//       })
//       .then(console.log('2354234234', response => response.json()))
//   .then(item => dispatch(resolvedAddItem(item)))
//    .then(console.log('hello'))
// }

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


export function fetchProducts(item) {
    return (dispatch, getState) => {
        const userDetails = getState();
        console.log(userDetails)
        console.log(item, 'fetchProducts action')

      dispatch(fetchProductsBegin());
      return fetch('/api/news/favorite',
       { 
           credentials: 'include',
           method: 'POST',
            headers: {
                'Content-Type': 'application/json'
             },
        body: JSON.stringify({ item })} )
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json.products));
          return json.products;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }
  
//   Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

//   export const fetchProducts = item => dispatch => {
//     fetch('/api/news/favorite', {
//       credentials: 'include',
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ item })
//     })
//     .then(res => res.json())
//     // .then(({ user, isAuth }) => dispatch(setUser(user, isAuth)))
//     .catch(err => console.log(err))
//   }

// //   Handle HTTP errors since fetch won't.
//   function handleErrors(response) {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response;
//   }
  
// export function fetchProducts(item) {
//     return dispatch => {
//       dispatch(fetchProductsBegin());
//       return fetch('/api/news/favorite', {
//         credentials: 'include',
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ item })
//       })
//         .then(handleErrors)
//         .then(res => res.json())
//         .then(json => {
//           dispatch(fetchProductsSuccess(json.products));
//           return json.products;
//         })
//         .catch(error => dispatch(fetchProductsFailure(error)));
//     };
//   }
  
// //   Handle HTTP errors since fetch won't.
//   function handleErrors(response) {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response;
//   }

export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});


// import {
//     FETCH_PRODUCTS_BEGIN,
//     FETCH_PRODUCTS_SUCCESS,
//     FETCH_PRODUCTS_FAILURE
//   } from './productActions';
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function productReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PRODUCTS_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: false,
          items: action.payload.products
        };
  
      case FETCH_PRODUCTS_FAILURE:
        // The request failed. It's done. So set loading to "false".
        // Save the error, so we can display it somewhere.
        // Since it failed, we don't have items to display anymore, so set `items` empty.
        //
        // This is all up to you and your app though:
        // maybe you want to keep the items around!
        // Do whatever seems right for your use case.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }