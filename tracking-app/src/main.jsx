import React from "react";
import ReactDOM from "react-dom/client";

//components
import App from "./App";
import LoginForm from "./shared/components/FormInput/LoginForm";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
