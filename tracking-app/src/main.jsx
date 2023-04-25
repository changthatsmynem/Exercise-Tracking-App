import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RegistComplete from "./shared/Pages/RegistComplete";
import AddActivity from "./shared/Pages/AddActivity";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
