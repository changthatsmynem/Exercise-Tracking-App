import React from "react";
import ReactDOM from "react-dom/client";

//components
import App from "./App";
import LoginForm from "./shared/components/FormInput/LoginForm";
import RegisterForm from "./shared/components/FormInput/RegisterForm";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
