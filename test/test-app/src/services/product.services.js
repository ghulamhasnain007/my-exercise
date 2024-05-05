import React from 'react'
import { db } from '../components/firebase/config/FirebaseConfig'
import { ref, push, child, get, set } from 'firebase/database'
import { ProductEntity } from '../lib/firebase.entities'

const dbRef = ref(db)

export const getAllProducts = async () => {
    try {
        const response = await get(child(dbRef, ProductEntity))

        if (response.exists()) {
            const data = response.val()
            return Object.values(data)
        }
    } catch (error) {
        console.error('Error', error)
    }
}

export const addProduct= (data) => {
  try {
        const productKey = push(child(ref(db), ProductEntity)).key
        const productEntityRef = ref(db, ProductEntity + '/' + productKey)

        const response = set(productEntityRef, {
            pid: productKey,
            ...data
        })

        return response
    } catch (error) {
        console.error('Error', error)
    }
}

export const getProductsById = async (id) => {
    try {
        // dispatch(showLoader());
        const snapshot = await get(child(ref(db), `products/${id}`));
        if(snapshot.exists()){
            return snapshot.val();
            // return Object.values(snapshot.val());
        }
    } catch (error) {
        console.log(error);
    } 
}




