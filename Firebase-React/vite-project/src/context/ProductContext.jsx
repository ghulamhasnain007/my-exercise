import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const GlobalContext = createContext();
const useGlobalContext = ()=> useContext(GlobalContext)

function ProductContext({children}) {

    const [products, setProducts] = useState([])
    // const [showUser, setShowUser] = useState(false)

  return (
    <div>
        <GlobalContext.Provider value={{products, setProducts}}>
            {children}
        </GlobalContext.Provider>
    </div>
  )
}

export default ProductContext
export { useGlobalContext }