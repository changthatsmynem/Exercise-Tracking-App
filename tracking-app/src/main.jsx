import React from "react";
import ReactDOM from "react-dom/client";

//components
import App from "./App";
import LoginForm from "./shared/components/FormInput/LoginForm";
import AddActivity from "./shared/Pages/AddActivity";
import AddAct2 from "./shared/Pages/AddAct2";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/addactivity",
    element: <AddActivity />,
  },

  {
    path: "/registcomplete",
    element: <RegistComplete />,
  },

  {
    path: "/login",
    element: <LoginForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
