import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page.tsx";
import Post from "./pages/Post.tsx";
import User from "./pages/User.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/new",
    element: <App />,
  },
  {
    path: "/post/:postId",
    element: (
      <App>
        <Post />
      </App>
    ),
  },
  {
    path: "/user/:userId",
    element: (
      <App>
        <User />
      </App>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
