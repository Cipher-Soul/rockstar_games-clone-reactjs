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
    element: <Header/>,
  },
  {
    path:'about/',
    element:<div>About us</div>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
