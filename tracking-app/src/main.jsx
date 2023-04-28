import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AddActivity from "./shared/Pages/AddActivity";
import AddAct2 from "./shared/Pages/AddAct2";

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
