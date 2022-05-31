import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCdRbdm7Ntjn40VVrlDTAiNWXUkAMxj164",
  authDomain: "disneyplus-clone-7e09e.firebaseapp.com",
  projectId: "disneyplus-clone-7e09e",
  storageBucket: "disneyplus-clone-7e09e.appspot.com",
  messagingSenderId: "18155071645",
  appId: "1:18155071645:web:786b8f8864c7e0bdb8cc74"
};


const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(firebaseApp);




export  {auth, provider};
export default db;