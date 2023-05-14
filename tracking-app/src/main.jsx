import React from "react";
import ReactDOM from "react-dom/client";

//components
import App from "./App";
import LoginForm from "./user/pages/Login/LoginForm";
import RegisterForm from "./user/pages/Register/RegisterForm";
import EditActivityCard from "./activity/pages/EditAct";
import RegistComplete from "./user/pages/Register/RegistComplete";
import AddActivity from "./activity/pages/AddActivity";
import Dashboard from "./user/pages/Dashboard/Dashboard";

//router
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
    path: "/add",
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
