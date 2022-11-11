import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Error from "../../Pages/Error/Error";
import About from "../../Pages/Home/About/About";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home"
import AllService from "../../Pages/Home/Services/AllService";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/services',
                element: <AllService></AllService>
            },
            {
                path:'/services/:id',
                element: <Checkout></Checkout>,
                loader: ({params})=>
                fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])
export default router;