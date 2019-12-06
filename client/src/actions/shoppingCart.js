// actions for the shopping cart which show in every page

// import * as TYPES from '../constants/ActionTypes'
import { SET_ITEM, ADD_ITEM, DELETE_ITEM }from '../constants/ActionTypes'


// export const setItem = (item) => (console.log('this is', item ), {
//     type: TYPES.SET_ITEM,
//     item,
// }, console.log('rewrwe'))

export const addItem = (item) => {
    console.log(item, ' this isefrwer')
    // dispatch({

    // })
}

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