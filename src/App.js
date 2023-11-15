import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./pages/Store";
import About from "./pages/About";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Store /> },
      { path: "/AboutUs", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
