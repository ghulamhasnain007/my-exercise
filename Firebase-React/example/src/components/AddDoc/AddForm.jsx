import React from 'react'
import { useForm } from 'react-hook-form'
import { addAdd } from '../../services/firebaseServices';

function AddForm() {
    const {register, reset, handleSubmit, formState:{errors}} = useForm()

    function onSubmitFun(data){
        console.log(data);
        addAdd(data)
        reset()
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmitFun)}>
            <div>
                <label>Enter Name</label>
                <input type='text'id='name' {...register('name')} />
            </div>
            <div>
                <label>Enter Age</label>
                <input id="age" type='text' {...register('age')} />
            </div>
            <div>
                <label>Enter Gender</label>
                <select id='gender' {...register('gender')}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddForm