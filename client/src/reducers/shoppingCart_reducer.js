import * as TYPES from '../constants/ActionTypes'

export const shoppingCart_reducer = ( state={}, action) => {
    const { type, item } = action
    switch(type) {
        case TYPES.ADD_ITEM:
          return {
            storeCart: this.state.item
          }
        case TYPES.DELETE_ITEM:
          return {
            storeCart: this.state.item
          }
        default:
          return state
      }

}