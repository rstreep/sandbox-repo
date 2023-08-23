import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";

const routes = [
  {
    path:"/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
]

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
