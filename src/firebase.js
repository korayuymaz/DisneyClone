import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdRbdm7Ntjn40VVrlDTAiNWXUkAMxj164",
  authDomain: "disneyplus-clone-7e09e.firebaseapp.com",
  projectId: "disneyplus-clone-7e09e",
  storageBucket: "disneyplus-clone-7e09e.appspot.com",
  messagingSenderId: "18155071645",
  appId: "1:18155071645:web:786b8f8864c7e0bdb8cc74"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;