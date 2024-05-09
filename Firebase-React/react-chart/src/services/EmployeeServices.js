import { collection, addDoc, getDoc, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export async function addEmployee(data, id) {
    const supervisor = data.superDesignation
  try {
    await setDoc(doc(db, 'Employees', `${supervisor}`, 'SubOrdinates', data.EmployeeName ),{
      EmployeeName: data.EmployeeName,
      designation: data.Designation,
      supervisor: data.Supervisor,
      supervisorDesignation: data.superDesignation
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

export async function getAllEmployees(rank) {
    try {
        const employeesRef = collection(db, "Employees", rank , "SubOrdinates");
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

// export async function specificData(supervisor, employee){
//   try {
//     console.log("Querying database for supervisor:", supervisor, "and employee:", employee);
//     const employeeRef = collection(db, "Employees", supervisor, employee);
//     const querySnapshot = await getDocs(employeeRef);
    
//     if (querySnapshot.empty) {
//       console.log("No documents found for supervisor:", supervisor, "and employee:", employee);
//       return [];
//     }
    
//     const employeeData = [];
//     querySnapshot.forEach(doc => {
//       employeeData.push({
//         id: doc.id,
//         ...doc.data()
//       });
//     });
    
//     console.log("All employees:", employeeData);
//     return employeeData;
//   } catch (error) {
//     console.error("Error getting employees: ", error);
//     return [];
//   }
// }




export async function specificData(supervisor, employee){
  try {
    console.log("Querying database for supervisor:", supervisor, "and employee:", employee);
    const employeeRef = doc(db, "Employees", supervisor, "SubOrdinates", employee);
    const docSnap = await getDoc(employeeRef);
    
    if (!docSnap.exists()) {
      console.log("No document found for supervisor:", supervisor, "and employee:", employee);
      return null; // Return null if no document is found
    }
    
    const employeeData = docSnap.data();
    
    console.log("Employee data:", employeeData);
    return employeeData;
  } catch (error) {
    console.error("Error getting employee data: ", error);
    return null; // Return null in case of error
  }
}
