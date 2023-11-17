import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./pages/Store";
import About from "./pages/About";
import Root from "./pages/Root";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Store /> },
      { path: "/AboutUs", element: <About /> },
      { path: "Home", element: <Home /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
