import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// import Post from "./pages/AllPosts";
import New from "./pages/New";
import Edit from "./pages/Edit";
import PostsDetail from "./pages/PostsDetail";

const basename = process.env.PUBLIC_URL;
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // { path: "/posts", element: <Post /> },
      { path: "/new", element: <New /> },
      { path: "/posts/edit/:id", element: <Edit /> },
      { path: "/posts/:id", element: <PostsDetail /> },
    ],
  },
];
const router = createBrowserRouter(routes, { basename: basename });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
