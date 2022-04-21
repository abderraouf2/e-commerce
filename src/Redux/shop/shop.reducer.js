import shopActionType from "./shop.types";


const INITIAL_STATE= {
  collections: null,
  isFetching: false,
  errorMessage:undefined
}

const ShopReducer=(state=INITIAL_STATE,action)=>{
  
  switch(action.type){
    case shopActionType.FETCH_COLLECTIONS_START :
      return {
        ...state,
        isFetching: true
      }
      case shopActionType.FETCH_COLLECTIONS_SUCCESS :
      return {
        ...state,
        isFetching: false,
        collections: action.paylaod
      }
      case shopActionType.FETCH_COLLECTIONS_FAILURE :
      return {
        ...state,
        isFetching: false,
        errorMessage: action.paylaod
      }
    default: return state;
  }
}

export default ShopReducer;