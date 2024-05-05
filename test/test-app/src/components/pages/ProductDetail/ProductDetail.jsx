import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../../../services/product.services';

export default function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const singleProductData = await getProductsById(id);
                setProduct(singleProductData);
            } catch (error) {
                console.error('Error fetching product:', error);
            } 
        };
        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <div>
                <img src={product.image} alt={product.name} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                <div>
                    <div>{product.name}</div>
                    <div>{product.description}</div>
                    <div>Price: ${product.price}</div>
                </div>
            </div>
        </div>
    );
}
