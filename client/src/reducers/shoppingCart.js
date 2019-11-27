import { SET_ITEM, ADD_ITEM, DELETE_ITEM } from '../constants/ActionTypes';
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

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_ITEM:
            return {
                ...state,
                items: action.payload
            };
        case ADD_ITEM:
          console.log('its hittinh ')
            return {
                ...state,
                item: action.payload
            };

            case DELETE_ITEM:
                return {
                    ...state,
                    item: action.payload
                };
        default:
            return state;
    }
}