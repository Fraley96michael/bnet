import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxawgIePj1SRvx6W01NwzDRF_0OI4oKJM",
  authDomain: "bnet-9e046.firebaseapp.com",
  projectId: "bnet-9e046",
  storageBucket: "bnet-9e046.appspot.com",
  messagingSenderId: "572976220044",
  appId: "1:572976220044:web:955f8e06e36611aad038a9",
  measurementId: "G-5EKVCZS86Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
