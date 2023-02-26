import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Certificates, Home, NotFound, Settings } from "@app/pages";
import { DefaultLayout } from "@app/layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/settings",
        element: <Settings />,
        errorElement: <NotFound />,
        children: [
          {
            path: "/settings/certificates",
            element: <Certificates />,
            errorElement: <NotFound />,
          },
        ],
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
