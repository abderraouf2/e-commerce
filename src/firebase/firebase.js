
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {  getFirestore,doc,getDoc, setDoc,collection,writeBatch } from "firebase/firestore";


const config = {
  apiKey: "AIzaSyBCU9qgoWIVtx2B-LfcJ3zuYDXrVnGIPB4",
  authDomain: "e-commercedb-767d9.firebaseapp.com",
  projectId: "e-commercedb-767d9",
  storageBucket: "e-commercedb-767d9.appspot.com",
  messagingSenderId: "319438881450",
  appId: "1:319438881450:web:4a3a5f1eb9d9553b1406d3",
  measurementId: "G-885BGJ4GD7"
};


// Initialize Firebase
const app= initializeApp(config);
const db = getFirestore(app);

export const createUserProfilDocument= async (userAuth, additionalData)=>{
  if(!userAuth) return;
  const userRef= doc(db,`users/${userAuth.uid}`);
  const snapShot= await getDoc(userRef);
 
  if(!snapShot.exists()){
    const {  displayName,email }= userAuth;
    const createdAt= new Date();

    try{
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      console.log("Document written with ID: ", userRef.id);
    }
    catch(error){
      console.log('error creating user', error.message);
    }

  }
  return userRef;
}
  
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
  });


  export const AddCollectionsAndDocs= async (collectionKey,object)=>{
    const collectionRef = collection(db,collectionKey) ;

    const batch= writeBatch(db);
    Object.keys(object).forEach((obj) => {
      const newDocRef= doc(collectionRef);
      batch.set(newDocRef,obj); 
    });
    return await batch.commit()
    
  }

export  const auth = getAuth();
export const signInWithGoogle=()=>signInWithPopup(auth, provider);


  
