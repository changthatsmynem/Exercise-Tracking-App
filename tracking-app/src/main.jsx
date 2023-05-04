import React from "react";
import ReactDOM from "react-dom/client";

//components
import App from "./App";
import LoginForm from "./shared/components/FormInput/LoginForm";
import RegisterForm from "./shared/components/FormInput/RegisterForm";
import FormActivityCard from "./shared/Pages/EditAct";
import RegistComplete from "./shared/Pages/RegistComplete";
import Dashboard from "./shared/Pages/Dashboard";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    path: "/edit",
    element: <FormActivityCard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
