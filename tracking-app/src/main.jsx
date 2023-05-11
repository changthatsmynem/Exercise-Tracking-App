import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoginForm from "./shared/components/FormInput/LoginForm";
import RegisterForm from "./shared/components/FormInput/RegisterForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddActivity from "./shared/Pages/AddActivity.jsx";
import RegistComplete from "./shared/Pages/RegistComplete.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/AddActivity",
    element: <AddActivity />,
  },

  {
    path: "/RegistComplete",
    element: <RegistComplete />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
