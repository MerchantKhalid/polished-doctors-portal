import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Appointment from "../../Pages/Appointment/Appointment"
import Home from "../../Pages/Home/Home/Home"

import Login from "../../UsersEntry/Login/Login"
import Signup from "../../UsersEntry/Signup/Signup"

export const router= createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/appointment',
                    element:<Appointment></Appointment>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/signup',
                    element:<Signup></Signup>
                }
            ]
        }
])