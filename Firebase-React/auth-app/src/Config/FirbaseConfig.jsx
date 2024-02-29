// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTdAPipj2a4IQ6tNHWC_AbP0ASGYOVKJ4",
  authDomain: "react-app-6b98f.firebaseapp.com",
  projectId: "react-app-6b98f",
  storageBucket: "react-app-6b98f.appspot.com",
  messagingSenderId: "521266387885",
  appId: "1:521266387885:web:e367c88ae80eb40bdb5f24",
  measurementId: "G-9N7W7YCL0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
    app,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
}