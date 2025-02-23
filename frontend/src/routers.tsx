import {createBrowserRouter, Navigate} from "react-router-dom";
// import layout from './components/guestlayout';

import Login from "./userlogin/login";
import Signup from "./userlogin/signup";
import ForgotPassword from "./userlogin/forgotpassword";
import ResetPassword from "./userlogin/resetpassword";
import AdminPanel from "./admin/adminhome";


const router = createBrowserRouter([
    {
      path: '/',
      element: <AdminPanel/>,
      children: [
        {
          path: '/',
          element: <Navigate to="/dashboard"/>
        },
        {
          path: '/dashboard',
          element: <Signup/>
        },
        {
          path: '/users',
          element: <Login/>
        },
        
      ]
    },
    {
      path: '/',
      element: <ForgotPassword/>,
      children: [
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/signup',
          element: <Signup/>
        }
      ]
    },
    {
      path: "*",
      element: <ResetPassword/>
    }
  ])

  export default router;
