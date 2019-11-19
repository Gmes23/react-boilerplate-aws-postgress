// actions for the shopping cart which show in every page

import * as TYPES from '../constants/ActionTypes'

export const addItem = (item) =>  ({
    type: TYPES.ADD_ITEM,
    item
})

// export const addItems = (item) => dispatch => {
//     item => dispatch(addItem(item))
// }