import { CartActionTypes } from "./cart.types";
import { AddItemToCart,removeItem } from "./cart.utils";

const initialState={
  hidden:true,
  cartItems:[]
}

const cartReducer=(state=initialState,action)=>{
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
          ...state,
          hidden:!state.hidden,
        }
    case CartActionTypes.ADD_ITEM:
      return{
        ...state,
        cartItems: AddItemToCart(state.cartItems,action.payload)
      }
      case CartActionTypes.REMOVE_ITEM:
        return{
          ...state,
          cartItems: removeItem(state.cartItems,action.payload)
        }
      case CartActionTypes.CLEAR_ITEM:
        return {
          ...state,
          cartItems:state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        }
      
    default:
      return state;
  }
}

export default cartReducer;