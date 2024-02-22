import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AllPosts from "./pages/AllPosts";
import New from "./pages/New";
import Edit from "./pages/Edit";
import PostsDetail from "./pages/PostsDetail";

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
      { path: "/posts", element: <AllPosts /> },
      { path: "/posts/:id", element: <PostsDetail /> },
      { path: "/new", element: <New /> },
      { path: "/edit/:id", element: <Edit /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
