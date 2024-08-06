import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import App from './App.jsx'
import Inbox from './Component/Inbox';
import Post from './Component/Post';
import Calender from './Component/Calender';
import Blog from './Component/Blog';
import Pricing from './Component/Pricing';
import Login from './Component/Login';
import Signup from './Component/Signup';
import ErrorPage from './Component/ErrorPage';
import Update from './Component/Update';
import ChangePassword from './Component/ChangePassword';
import  Users from './Component/Users';
import Video from './Component/Video';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/inbox",
    element: <Inbox />
  },
  
  {
    path: "/post",
    element: <Post />
  },
  {
    path: "/calendar",
    element: <Calender />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "Pricing",
    element: <Pricing />
  },
  {
    path: "/user",
    element: <Users />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/error",
    element: <ErrorPage/>
  },
  {
    path: "/update",
    element: <Update/>
  },
  {
    path: "/changepassword",
    element: <ChangePassword/>
  },
  {
    path: "/video",
    element: <Video/>
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
