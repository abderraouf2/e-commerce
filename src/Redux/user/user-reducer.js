import {userActionTypes} from './user.type';


const initialState={
  currentUser:null
}


const userReducer= (currentState=initialState,action)=>{
    switch (action.type) {
      case userActionTypes.SET_CURRENT_USER:
        return {
          ...currentState,
          currentUser : action.payload,
        }
        ;
    
      default:
        return currentState;
    }
}
export default userReducer;