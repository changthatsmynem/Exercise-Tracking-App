import React from "react";
import ReactDOM from "react-dom/client";

//components
import App from "./App";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
