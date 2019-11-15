// actions for the shopping cart which show in every page

import * as TYPES from '../constants/ActionTypes'

export const addItem = (item) => dispatch => {
    console.log(item + 'this is being send to additem')
}