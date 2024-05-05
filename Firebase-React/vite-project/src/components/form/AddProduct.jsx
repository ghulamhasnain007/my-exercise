import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Detailed from '../products/Detailed';
import { useGlobalContext } from '../../context/ProductContext';

function AddProduct() {
    const { products, setProducts } = useGlobalContext();
    const { register, handleSubmit, formState: { errors }, reset } = useForm(); // Destructure reset from useForm
    
    const onSubmitFun = async (data) => {
        const imageFile = data.productImage[0]; // Get the uploaded image file
        const imageDataUrl = await readFileAsDataURL(imageFile); // Convert the image file to a data URL
        const newProduct = {
            id: new Date().getTime().toString(),
            name: data.productName,
            price: data.productPrice,
            image: imageDataUrl, // Store the data URL of the image
            description: data.productDesp
        };

        // Update products array using the callback form of setProducts
        setProducts(prevProducts => {
            const updatedProducts = [...prevProducts, newProduct];
            localStorage.setItem('items', JSON.stringify(updatedProducts)); // Store updated products in localStorage
            return updatedProducts; // Return the updated products array
        });

        reset(); // Reset the form after submission
    };    

    // Function to read file as data URL
    const readFileAsDataURL = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitFun)}>
                <div>
                    <label htmlFor='productName' className="block text-sm font-medium text-gray-700">Enter Product Name</label>
                    <input type='text' id='productName' {...register('productName',{ required : "Product Name is required"})} 
                    className="mt-1 p-2 w-full border rounded-md" />
                </div>
                <div>
                    <label htmlFor='productPrice' className="block text-sm font-medium text-gray-700">Enter Product Price</label>
                    <input type='number' id='productPrice' {...register('productPrice',{ required : "Product Price is required"})}
                    className="mt-1 p-2 w-full border rounded-md"/>
                </div>
                <div>
                    <label htmlFor='productImage' className="block text-sm font-medium text-gray-700">Enter Product Image</label>
                    <input type='file' id='productImage' accept="image/jpeg,image/png" {...register('productImage',{ required : "Product Image is required"})}
                    className="mt-1 p-2 w-full border rounded-md"/>
                </div>
                <div>
                    <label htmlFor='productDesp' className="block text-sm font-medium text-gray-700">Enter Product Description</label>
                    <textarea id='productDesp' {...register('productDesp',{ required : "Product Description is required"})}
                    className="mt-1 p-2 w-full border rounded-md" />
                </div>
                <div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
            {/* <Detailed products={products} /> */}
        </div>
    );
}

export default AddProduct;
