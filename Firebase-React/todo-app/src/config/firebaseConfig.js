import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR-wzURw6a8-7C8onqw8WLF8J2MDisEqU",
  authDomain: "react-todo-7a792.firebaseapp.com",
  projectId: "react-todo-7a792",
  storageBucket: "react-todo-7a792.appspot.com",
  messagingSenderId: "787115189684",
  appId: "1:787115189684:web:050a9a660be537d9653ee1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)