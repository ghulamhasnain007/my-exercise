import React from 'react'
import { getCityData, getUserData } from '../services/firebaseServices'

function Detail() {
    // const cityData = getCityData()
    // const userData = getUserData()
  return (
    <div>
        <button onClick={()=> getCityData()}>Cities</button>
        <button onClick={()=> getUserData()}>User</button>
        {/* <table>
            <th>
                <td>Name</td>
                <td>Age</td>
                <td>Gender</td>
            </th>
        </table> */}
    </div>
  )
}

export default Detail