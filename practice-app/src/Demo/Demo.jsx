import React, { useState } from 'react'

function Demo() {
  return (
    <div>
        <HOCRed cpm={Counter}/>
        <HOCBlue cpm={Counter}/>
        <HOCGreen cpm={Counter}/>
    </div>
  )
}
function HOCRed(props)
{
    return(
    <div>
        <h1 style={{backgroundColor:'red', width:'100px'}}>Red<props.cpm/></h1>
    </div>
    );
}
function HOCBlue(props)
{
    return(
    <div>
        <h1 style={{backgroundColor:'blue', width:'100px'}}>Blue<props.cpm/></h1>
    </div>
    );
}
function HOCGreen(props)
{
    return(
    <div>
        <h1 style={{backgroundColor:'green', width:'100px'}}>Green<props.cpm/></h1>
    </div>
    );
}
function Counter()
{
    const [num, setNum] = useState(0)
    return(
    <div>
        <p>{num}</p>
        <button onClick={()=> setNum(num + 1)}>Update</button>
    </div>
    )
}
export default Demo