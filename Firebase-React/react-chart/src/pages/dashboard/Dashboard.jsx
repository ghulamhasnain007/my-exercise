import React, {useEffect, useState} from 'react'
import { getAllEmployees } from '../../services/EmployeeServices'

function Dashboard(){
    const [employees, setEmployees] = useState(null)
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await getAllEmployees();
                setEmployees(response)
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    },[])

    if(!employees) return <div>null</div>

    return(
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
                    <div className="text-sm font-medium text-gray-900">{employees.employeesName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{employees.description.slice(0, 50)}....</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">$ {employees.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-sm font-medium text-green-600 hover:text-green-800">View</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-sm font-medium text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
}



export default Dashboard