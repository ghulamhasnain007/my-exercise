import React, { useState } from 'react'


function Feedback({onSubmit}) {
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")
    const isDisable = Number(score) < 5 && comment.length <= 10;

    const textAreaPlaceholder = isDisable
    ? "Please provide a comment explaining why the experience was bad - minimum 10 characters"
    : "Optional Feedback"

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({score, comment})
        console.log("Form Submitted");
    }
  return (
    <div className='App'>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Feedback Form</h2>
                <div className='Field'>
                    <label>Score ⭐</label> <br/>
                    <input 
                     type='range'
                     value={score}
                     min={0} max={10}
                     onChange={(e) => setScore(e.target.value)}/>
                </div>
                <div className='Field'>
                    <label htmlFor="comment">Comment:</label><br/>
                    <textarea  
                    placeholder={textAreaPlaceholder}
                    value={comment}
                     onChange={(e) => setComment(e.target.value)} />
                </div>
                <div className='Field'>
                    <button type='submit' disabled={!comment}>Submit</button>
                </div>
            </fieldset>
        </form>
    </div>
  )
}

export default Feedback