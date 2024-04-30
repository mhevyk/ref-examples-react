import { Navigate, RouteObject } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import UseCallbackAsRefLayout from "./layouts/RootLayout";
import DynamicInputHeightPage from "./pages/DynamicInputHeightPage";
import DynamicInputHeightUsingSimpleRefPage from "./pages/DynamicInputHeightUsingSimpleRefPage";
import DynamicImageHeightPage from "./pages/DynamicImageHeightPage";
import InfiniteScrollingPage from "./pages/InfiniteScrollingPage";
import RefVsSimpleVariable from "./pages/RefVsSimpleVariable";
import UncontrolledForm from "./pages/FormUncontrolled";
import FormControlled from "./pages/FormControlled";

const router: RouteObject[] = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <UseCallbackAsRefLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="ref-vs-variable" />,
          },
          {
            path: "dynamic-ref-page",
            element: <DynamicInputHeightUsingSimpleRefPage />,
          },
          {
            path: "dynamic-input-height",
            element: <DynamicInputHeightPage />,
          },
          {
            path: "dynamic-image-height",
            element: <DynamicImageHeightPage />,
          },
          {
            path: "infinite-scrolling",
            element: <InfiniteScrollingPage />,
          },
          {
            path: "ref-vs-variable",
            element: <RefVsSimpleVariable />,
          },
          {
            path: "controlled-form",
            element: <FormControlled />,
          },
          {
            path: "uncontrolled-form",
            element: <UncontrolledForm />,
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
];

export default router;
