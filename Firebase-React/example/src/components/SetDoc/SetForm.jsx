import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { settingData } from '../../services/firebaseServices';

function SetForm() {
    const { register, reset, handleSubmit } = useForm();
    const [id, setId] = useState(1); // Initial ID is 1

    async function onSubmitForm(data) {
        console.log(data);
        try {
            setId(prevId => prevId + 1); // Increment the ID for the next entry
            await settingData(data, id); // Pass the current ID
            reset();
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label htmlFor="name">Enter Name</label>
                    <input type='text' id='name' {...register('name')} />
                </div>
                <div>
                    <label htmlFor="age">Enter Age</label>
                    <input id="age" type='text' {...register('age')} />
                </div>
                <div>
                    <label htmlFor="gender">Enter Gender</label>
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
    );
}

export default SetForm;
