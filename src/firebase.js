import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxawgIePj1SRvx6W01NwzDRF_0OI4oKJM",
  authDomain: "bnet-9e046.firebaseapp.com",
  projectId: "bnet-9e046",
  storageBucket: "bnet-9e046.appspot.com",
  messagingSenderId: "572976220044",
  appId: "1:572976220044:web:955f8e06e36611aad038a9",
  measurementId: "G-5EKVCZS86Q",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider };
export default db;
