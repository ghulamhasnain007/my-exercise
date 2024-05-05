import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../../products/Home";
import AddProductForm from "../forms/AddProduct";
import Dashboard from "../pages/dashboard/Dashboard";
import ProductDetailPage from "../pages/ProductDetail/ProductDetail";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/product/:id",
        element: <ProductDetailPage />
    },
    {
        path: "/add-product",
        element: <AddProductForm />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
]);

function Navigation() {
    return (
        <RouterProvider router={router} />
    )
}

export default Navigation