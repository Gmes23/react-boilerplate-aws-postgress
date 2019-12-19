// import { SET_ITEM, ADD_ITEM, DELETE_ITEM } from '../constants/ActionTypes';
// import * as TYPES from '../constants/ActionTypes'


// export const shoppingCart = ( state = {}, action) => {
//     const { type, item } = action
//     switch(type) {
//         case TYPES.SET_ITEM:
//           console.log('rwerwer set item')
//           return {

//             item: item
//           }
//         case TYPES.ADD_ITEM:
//           console.log('reducer for item')
//           return {
//             ...state,
//             cart: item
//           }
//         case TYPES.DELETE_ITEM:
//           return {
//             ...state,
//             cart: item
//           }
//         default:
//           return state
//       }

// }


const initialState = {
    items: {}
}

const shoppingCart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            console.log(action.item)
            return action.item  
        default:
            return state;
    }
};

export default shoppingCart;