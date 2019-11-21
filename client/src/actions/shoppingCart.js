// actions for the shopping cart which show in every page

import * as TYPES from '../constants/ActionTypes'

// export const addItem = (item) =>  ({
//     type: TYPES.ADD_ITEM,
//     state: item
// })

export const addItem = (item) => 
({
    type: TYPES.ADD_ITEM,
    cart: item
})