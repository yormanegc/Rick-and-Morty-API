import React, { useState } from "react";
import ReactDOM from "react-dom/client";

//Providers
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//components
import App from "./App";
import Episodes from "./Components/Episodes/Episodes";
import CharactersDetails from "./Components/CharactersDetails/CharactersDetail";
import Error404 from "./Components/Error/Error404";
import Location from "./Components/Location/Location";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App title="Rick and Morty" />,
  },
  {
    path: "/episodes/:param",
    element: <Episodes />,
  },
  {
    path: "/character/:characterId/:param",
    element: <CharactersDetails />,
  },
  {
    path: "/location/:param",
    element: <Location />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
