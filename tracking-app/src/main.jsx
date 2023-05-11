import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoginForm from "./shared/components/FormInput/LoginForm";
import RegisterForm from "./shared/components/FormInput/RegisterForm";
import FormActivityCard from "./shared/Pages/EditAct";
import RegistComplete from "./shared/Pages/RegistComplete";
import Dashboard from "./shared/Pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddActivity from "./shared/Pages/AddActivity.jsx";
import RegistComplete from "./shared/Pages/RegistComplete.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <LoginForm />,
  },

  {
    path: "/register",
    element: <RegisterForm />,
  },

  {
    path: "/registcomplete",
    element: <RegistComplete />,
  },

  {
    path: "/user",
    element: <Dashboard />,
  },

  {
    path: "/AddActivity",
    element: <AddActivity />,
  },

  {
    path: "/edit",
    element: <FormActivityCard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
