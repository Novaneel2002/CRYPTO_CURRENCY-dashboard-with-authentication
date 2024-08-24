import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "@fontsource/ubuntu";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';

import Transactionpage from './pages/Transaction/Transactionpage';
import Support from './pages/Support/Support';
import Signup from './pages/Auth/Signup/Signup';
import Signin from './pages/Auth/Signin/Signin';
import Registeremailverify from './pages/Auth/RegisterEmailVerify/Registeremailverify';
import Registersuccess from './pages/Auth/RegisterSuccess/Registersuccess';
import Forgotpassword from './pages/Auth/ForgotPassword/Forgotpassword';
import Forgotpasswordsent from './pages/Auth/ForgotPasswordSent/Forgotpasswordsent';
import Resetpasswordsuccess from './pages/Auth/ResetPasswordSuccess/Resetpasswordsuccess';
import Resetpassword from './pages/Auth/ResetPassword/Resetpassword';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ProtectedRoute from './components/Auth/ProtectedRoute';
import AlreadySigninRoute from './components/Auth/AlreadySigninRoute';




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Dashboard />
      </ProtectedRoute>,
    },
    {
      path: "/transaction",
      element: <ProtectedRoute>
        <Transactionpage />
        </ProtectedRoute>,
    },
    {
      path: "/support",
      element: <ProtectedRoute>
        <Support />
      </ProtectedRoute> ,
    },
    {
      path: "/signup",
      element:<AlreadySigninRoute>
        <Signup />
      </AlreadySigninRoute> ,
    },
    {
      path: "/signin",
      element:<AlreadySigninRoute>
        <Signin />
      </AlreadySigninRoute> ,
    },
    {
      path: "/register-email-verify/:email",
      element:<AlreadySigninRoute>
        <Registeremailverify />
      </AlreadySigninRoute> ,
    },
    {
      path: "/email-verify/:token",
      element:<AlreadySigninRoute>
        <Registersuccess />
      </AlreadySigninRoute> ,
    },
    {
      path: "/forgot-password",
      element:<AlreadySigninRoute>
        <Forgotpassword />
      </AlreadySigninRoute> ,
    },
    {
      path: "/forgot-password-email-sent/:email",
      element:<AlreadySigninRoute>
         <Forgotpasswordsent />
      </AlreadySigninRoute>,
    },
    {
      path: "/forgot-password-verify/:token",
      element:<AlreadySigninRoute>
        <Resetpassword />
      </AlreadySigninRoute> ,
    },
    {
      path: "/resetpasswordsucess",
      element:<AlreadySigninRoute>
        <Resetpasswordsuccess />
      </AlreadySigninRoute> ,
    },
  ]);
  // const [count, setCount] = useState(0)
  const queryClient = new QueryClient()
  return (
    // <>
    //   


    // </>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
