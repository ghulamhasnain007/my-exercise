import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsQ6I7L3TD5Ta0Na3JJYrbuvlT8XulH2w",
  authDomain: "chart-app-82351.firebaseapp.com",
  projectId: "chart-app-82351",
  storageBucket: "chart-app-82351.appspot.com",
  messagingSenderId: "381843746445",
  appId: "1:381843746445:web:9b5d1a30efcf4baf053cc4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)