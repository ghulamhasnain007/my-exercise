import React, {useState} from 'react'
import { Button } from '@mui/icons-material';
function Todo()
{
    let [list,setList] = useState([]);
    let [inputText, setinputText] = useState('');

    function updateText(e){
        setinputText(e.target.value)
    }

    function addItem()
    {
        //purpose: list ma input sa value get karni ha
        var copyList = [...list]
        copyList.push(inputText)
        setList(copyList)

    } 
    function indexFunction(e)
    {
        //console.log(e)
        var copyList = [...list]
        copyList.splice(e,1)
        setList(copyList)
    }
    function deleteAll() {
        setList([])
    }
    function updateFunction(e)
    {
        var updatedValue = prompt("Enter Updated Value")
        if(updatedValue != null)
        {
            var copyList = [...list]
            copyList[e] = updatedValue
            setList(copyList)
        }
        else{
            alert("Invalid Value")
        }

    }
    
    return(
        <div>
            <h1>Todo App</h1>

            <input onChange={updateText} type="text" />
            <button onClick={addItem}>Add Item</button>
            <button onClick={deleteAll}>Delete All</button>
            <ul>
                {
                    list.map((value, index)=>
                    {
                        return(
                        <li key={index}>{value}
                        <button onClick={()=>{indexFunction(index)}}>Delete</button>
                        <button onClick={()=>{updateFunction(index)}}>Edit</button>
                        </li>)
                    })
                }
            </ul>
        </div>

    )
}
export default Todo