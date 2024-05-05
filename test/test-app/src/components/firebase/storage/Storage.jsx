import { addProduct } from "../../../services/product.services";
import { storage } from "../config/FirebaseConfig";
import { ref as sRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export const getImageUrl = (data, reset,id, dispatch) => {
   
    const productfile = data.image[0];
    const StorageRef = sRef(storage, `ProductsImages/${productfile.name}`);
    const uploadTask = uploadBytesResumable(StorageRef, productfile);
    uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      console.log(error);
     
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        addProduct({...data, image: downloadURL},reset,id);
        console.log(downloadURL);

      }).catch((error) => {
        console.log(error);
     
      })
    })
}