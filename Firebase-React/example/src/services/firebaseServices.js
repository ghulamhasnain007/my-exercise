import { addDoc, collection, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import {nanoid} from "nanoid"

export async function addAdd(data){
    try {
        const docRef = await addDoc(collection(db, "users"), {
          name: data.name,
          age: data.age,
          gender: data.gender
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    
}
// const id = nanoid()
export async function settingData(data,id){
    try{
        await setDoc(doc(db, "cities", `user${id}`),{
        name: data.name,
        age: data.age,
        gender: data.gender
        });
    }catch(error){
        console.log(error.message);
    }
}

export async function getCityData(){
    try{
        const querySnapshot = await getDocs(collection(db, "cities"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        return querySnapshot;
        });
    }catch(error){
        console.log(error);
    }
}

export async function getUserData(){
    try{
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        });
    }catch(error){
        console.log(error);
    }
}


