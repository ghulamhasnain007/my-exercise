import React from 'react';
// import MultiField from '../multiSelect/Field';
import { useForm } from 'react-hook-form';
import { addEmployee, getAllEmployees } from '../../services/EmployeeServices';

function AddForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    const id = new Date().toString()
    // const allData = [id, ...data]
    addEmployee(data)
    reset()
    console.log(data);
  };

  return (
    <div className="py-4 px-6">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <div className="mb-4">
            <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700">Enter Name</label>
            <input id="employeeName" {...register("EmployeeName", { required: "Employee Name is required" })} className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500" />
            {errors.EmployeeName && <span className="text-red-500">{errors.EmployeeName.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Enter your Designation</label>
            <input id="designation" {...register("Designation", { required: "Designation is required" })} className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500" />
            {errors.Designation && <span className="text-red-500">{errors.Designation.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="supervisor" className="block text-sm font-medium text-gray-700">Enter Name of your Supervisor</label>
            <input id="supervisor" {...register("Supervisor", { required: "Supervisor is required" })} className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500" />
            {errors.Supervisor && <span className="text-red-500">{errors.Supervisor.message}</span>}
          </div>
          <div className="mb-4">
          <label htmlFor="superDesignation" className="block text-sm font-medium text-gray-700">Select Supervisor's Designation</label>
            <select id="superDesignation" {...register("superDesignation", { required: "Supervisor Name is required" })} className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">Select...</option>
              <option value="CEO">CEO</option>
              <option value="Manager">Manager</option>
              <option value="Delivery Manager">Delivery Manager</option>
            </select>
            {errors.superDesignation && <span className="text-red-500">{errors.superDesignation.message}</span>}
          </div>
          <div>
            <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">ADD</button>
          </div>
          <div>
            <button type="button" onClick={()=> getAllEmployees()} className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Show</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
