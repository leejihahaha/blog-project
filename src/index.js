import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      { path: "/posts", element: <Posts /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
