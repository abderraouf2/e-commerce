
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";



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
initializeApp(config);
const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });

export  const auth = getAuth();
export const signInWithGoogle=()=>signInWithPopup(auth, provider);

  

  
