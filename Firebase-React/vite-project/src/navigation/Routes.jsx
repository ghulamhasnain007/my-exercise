import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import App from '../App'
import AddProduct from '../components/form/AddProduct'
import Detailed from '../components/products/Detailed'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/add-product',
        element: <AddProduct/>
    },
    {
        path: '/all-products',
        element: <Detailed/>
    }
])

function Navigation() {
    return (
        <RouterProvider router={router} />
    )
}

export default Navigation