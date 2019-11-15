import * as TYPES from '../constants/ActionTypes'

export const shoppingCart_reducer = ( state={}, action) => {
    const { type, shoppingCart } = action
    switch(type) {
        case TYPES.ADD_ITEM:
          return {
            shoppingCart: this.state.item
          }
        case TYPES.DELETE_ITEM:
          return {
            user: null,
            isAuth: false
          }
        default:
          return state
      }

}