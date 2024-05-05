import { collection, addDoc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export async function addEmployee(data) {
    const supervisor = data.superDesignation
  try {
    const ceoRef = collection(db, 'Employees', `${supervisor}`, 'SubOrdinates');
    await addDoc(ceoRef, 
    data.EmployeeName = {
      EmployeeName: data.EmployeeName,
      designation: data.Designation
    });
    console.log("Subordinate added under CEO");
  } catch (error) {
    console.error("Error adding subordinate: ", error);
  }
}

// export async function getAllEmployees(){
//     try{
//         const docRef = doc(db, "Employees");
//         const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
//   return Object.values(docSnap.data)
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }
//     }catch(error){
//         console.log(error.message);
//     }
// }

export async function getAllEmployees() {
    try {
        const employeesRef = collection(db, "Employees");
        const querySnapshot = await getDocs(employeesRef);
        const employeesData = [];
        querySnapshot.forEach(doc => {
            employeesData.push({
                id: doc.id,
                ...doc.data()
            });
        });
        console.log("All employees:", employeesData);
        return employeesData;
    } catch (error) {
        console.error("Error getting employees: ", error);
        return [];
    }
}