import { getDatabase } from 'firebase/database'
import { initializeApp } from 'firebase/app'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDor7lip7L4OP5qGWBvPRCdBvh8HjRUY9M",
    authDomain: "test-app-77df4.firebaseapp.com",
    projectId: "test-app-77df4",
    storageBucket: "test-app-77df4.appspot.com",
    messagingSenderId: "1054939319534",
    appId: "1:1054939319534:web:5ee3f2749a86d0cac177ff"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app)
  export const storage = getStorage(app)