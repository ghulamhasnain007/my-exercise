import React, { useState } from 'react'

function Form() {
const [name, setName] = useState("");

function handleSubmit(e){
    e.preventDefault();
    console.log("Form Submitted");
    setName("");
}


  return (
    <div>
        <form onSubmit={handleSubmit} >
            <fieldset>
                <div>
                    <label htmlFor="name">Name:</label>
                        <input
                        type='text'
                        id='name'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />                   
                </div>
                <button type='submit' disabled={!name}>
                    Submit
                </button>
            </fieldset>
        </form>
    </div>
  )
}

export default Form