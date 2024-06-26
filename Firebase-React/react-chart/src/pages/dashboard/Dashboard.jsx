import React, { useEffect, useState } from 'react';
import { getAllEmployees, specificData } from '../../services/EmployeeServices';

function Dashboard() {
    const [CEO, setCEO] = useState(null);
    const [Manager, setManager] = useState(null);
    const [Delivery, setDelivery] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const CEOResponse = await getAllEmployees("CEO");
                setCEO(CEOResponse);
                const ManagerResponse = await getAllEmployees("Manager");
                setManager(ManagerResponse);
                const DeliveryResponse = await getAllEmployees("Delivery Manager");
                setDelivery(DeliveryResponse);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                <table className="min-w-full border border-black">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">View Actions</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {CEO && CEO.map((employee, i) => (
                            <tr key={i} className="group relative border-b border-gray-200 hover:shadow-lg">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{employee.EmployeeName}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{employee.designation}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button onClick={()=>specificData(employee.supervisor, employee.EmployeeName)} className="text-sm font-medium text-green-600 hover:text-green-800">View</button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="text-sm font-medium text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>
                        ))}
                        {Manager && Manager.map((employee, i) => (
                            <tr key={i} className="group relative border-b border-gray-200 hover:shadow-lg">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{employee.EmployeeName}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{employee.designation}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button onClick={()=>specificData(employee.supervisor, employee.EmployeeName)} className="text-sm font-medium text-green-600 hover:text-green-800">View</button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="text-sm font-medium text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>
                        ))}
                        {Delivery && Delivery.map((employee, i) => (
                            <tr key={i} className="group relative border-b border-gray-200 hover:shadow-lg">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{employee.EmployeeName}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{employee.designation}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="text-sm font-medium text-green-600 hover:text-green-800" onClick={()=>specificData(employee.supervisor, employee.EmployeeName)}>View</button>
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
    );
}

export default Dashboard;
