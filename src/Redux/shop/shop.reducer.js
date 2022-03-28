import shopActionType from "./shop.types";


const INITIAL_STATE= {
  collections: null
}

const ShopReducer=(state=INITIAL_STATE,action)=>{
  
  switch(action.type){
    case shopActionType.UpdateCollections:
      console.log(action.payload);
      return {
        ...state,
        collections: action.payload 
      }
    default: return state;
  }
}

export default ShopReducer;