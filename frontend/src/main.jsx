import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HelmetProvider} from 'react-helmet-async';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/nos-vins",
        element: <App />,
    },
    {
        path: "/contact",
        element: <App />,
    },
    {
        path: "/contact",
        element: <App />,
    },

]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode >
            <RouterProvider router={router} />
    </React.StrictMode>
);
