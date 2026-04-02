import  React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import {store} from './app/store.js'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Counter from "./features/counter/counter.jsx";
import Todolist from "./features/TodoList/Todolist.jsx";
import Products from "./features/products/products.jsx";
import Todos from './features/Todos/Todos.jsx'
import ProductDetails from "./features/products/productDetails.jsx";
import StudentsForm from "./features/Students/StudentsForm.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";


const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
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

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);