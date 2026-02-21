import {
  CommonRoutes,
  ROOT_ROUTE_ID,
  TodoRoutes,
} from "@presentation/router/router.constants";
import AuthGuard from "@shared/components/AuthGuard/AuthGuard";
import App from "@src/presentation/app/App";
import React from "react";
import { createHashRouter } from "react-router-dom";

const ErrorPage = React.lazy(() => import("@pages/error/ErrorPage"));
const LandingPage = React.lazy(() => import("@pages/landing/LandingPage"));

const router = createHashRouter([
  {
    children: [
      {
        children: [
          {
            element: <LandingPage />,
            index: true,
          },
          {
            children: [
              {
                element: <LandingPage />,
                index: true,
              },
            ],
            path: TodoRoutes.BaseUrl,
          },
        ],
        path: CommonRoutes.BaseUrl,
      },
    ],
    element: (
      <AuthGuard>
        <App />
      </AuthGuard>
    ),
    errorElement: <ErrorPage />,
    id: ROOT_ROUTE_ID,
    path: "/",
  },
]);

export default router;
