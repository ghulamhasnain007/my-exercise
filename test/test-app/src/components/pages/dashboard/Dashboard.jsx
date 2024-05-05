import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../../services/product.services';

function Dashboard() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getAllProducts();
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      } 
    };
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      // Assuming you have a deleteProduct function in your product services
      // Replace deleteProduct with the actual function name
      await deleteProduct(productId);
      
      // If deletion is successful, update the state to remove the deleted product from the list
      setProducts(products.filter(product => product.id !== productId));
      
      console.log(`Product with ID ${productId} deleted successfully`);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (!products) return <div>null</div>;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <table className="min-w-full border border-black">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product, i) => (
              <tr key={i} className="group relative border-b border-gray-200 hover:shadow-lg">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{product.productName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{product.description.slice(0, 50)}....</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">$ {product.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-sm font-medium text-red-600 hover:text-red-900" onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
