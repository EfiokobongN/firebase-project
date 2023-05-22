import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCnWKXg5fvbOhO6bfX8OhmnbcF7FtuajnA",
    authDomain: "e-commerce-4be4c.firebaseapp.com",
    projectId: "e-commerce-4be4c",
    storageBucket: "e-commerce-4be4c.appspot.com",
    messagingSenderId: "810454809491",
    appId: "1:810454809491:web:d8f59ef54e76f05498c666",
    measurementId: "G-46DP3Q43Q2"
  };
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  
  
  export{auth, provider, storage};
  export default db;