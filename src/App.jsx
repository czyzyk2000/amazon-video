import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

const router = createBrowserRouter([
  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Header />
      <Home />
    </RouterProvider>
  );
}
export default App;
