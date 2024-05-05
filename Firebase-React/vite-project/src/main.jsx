import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductContext from './context/ProductContext.jsx'
import Navigation from './navigation/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ProductContext>
        <Navigation/>
      </ProductContext>
  </React.StrictMode>,
)
