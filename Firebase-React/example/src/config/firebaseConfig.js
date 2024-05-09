import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBEgYNgGU8MDToQnthg43EaGm_1gw5BMes",
  authDomain: "example-756a9.firebaseapp.com",
  projectId: "example-756a9",
  storageBucket: "example-756a9.appspot.com",
  messagingSenderId: "878528077520",
  appId: "1:878528077520:web:491f4cbc78f20e9b8bc8d5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)