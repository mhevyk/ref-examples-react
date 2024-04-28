import { RouteObject } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import UseCallbackAsRefLayout from "./layouts/RootLayout";
import DynamicInputHeightPage from "./pages/DynamicInputHeightPage";
import DynamicInputHeightUsingSimpleRefPage from "./pages/DynamicInputHeightUsingSimpleRefPage";
import DynamicImageHeightPage from "./pages/DynamicImageHeightPage";
import InfiniteScrollingPage from "./pages/InfiniteScrollingPage";

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
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
];

export default router;
