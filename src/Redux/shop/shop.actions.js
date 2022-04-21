import shopActionType from "./shop.types";
import { collection,getDocs,getFirestore } from 'firebase/firestore';
import {convertCollectionsSnapshotToMap} from '../../firebase/firebase';

export const fetchcollectionsStart= (collectionsMap)=>({
  type: shopActionType.FETCH_COLLECTIONS_START,
})

export const fetchcollectionsSuccess = ( collectionsMap ) => ({
  type: shopActionType.FETCH_COLLECTIONS_SUCCESS,
  paylaod: collectionsMap
})

export const fetchCollectionsFailure=(errorMessage)=>({
  action: shopActionType.FETCH_COLLECTIONS_FAILURE,
  paylaod: errorMessage
})

 
export const fetchcollectionsStartAsync= ()=> {
  return dispatch => {
    const db = getFirestore();
    const collectionRef= collection(db,'collections');
    dispatch(fetchcollectionsStart());
    getDocs(collectionRef).then(snapshot=>{      
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    dispatch(fetchcollectionsSuccess(collectionsMap));
    }).catch(error=>fetchCollectionsFailure(error.message));
}
}

