import React from 'react';
import { useGlobalContext } from '../../context/ProductContext';

function Detailed() {

  // const { products, setProducts} = useGlobalContext()
  const products = JSON.parse(localStorage.getItem('items'))

  return (
    // <div>
    //   <ul>
    //     {products.map((data) => (
    //       <li key={data.id}>
    //         <div><img src={data.image} alt="" /></div>
    //         <span>{data.id}</span>
    //         <span>{data.name}</span>

    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="group relative overflow-hidden border rounded-md border-gray-200 hover:shadow-lg">
                            <div className="aspect-w-1 aspect-h-1 bg-gray-200 flex items-center justify-center">
                                <img
                                    src={product.image}
                                    // alt={product.imageAlt}
                                    className="w-90 h-full transition duration-300 transform group-hover:scale-110"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 truncate">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    {product.description.slice(0, 50)}....
                                </p>
                                <p className="mt-2 font-bold text-gray-900">$ {product.price}</p>
                                {/* <Link to={`/product/${product.pid}`} className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View More</Link> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  );
}

export default Detailed;
