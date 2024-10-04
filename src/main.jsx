import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/header.jsx';

// main routes url
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'about/',
    element:<div>About us</div>,
  }
  ,{
    path:'*',
    element:<div className='text-red-500 font-extrabold text-3xl'>404 page not found</div>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
