import * as TYPES from '../constants/ActionTypes'

export const shoppingCart = ( state={}, action) => {
    const { type, item } = action
    switch(type) {
        case TYPES.ADD_ITEM:
          return {
            cart: item
          }
        case TYPES.DELETE_ITEM:
          return {
            cart: item
          }
        default:
          return state
      }

}