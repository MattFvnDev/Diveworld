import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RootLayout } from "./layouts"
import {
  About,
  Courses,
  DetailedCourse,
  DetailedOffer,
  Home,
  Offer,
  Pricelist,
  GroupOffer,
} from "./pages"

export default function Router() {
  const BrowserRoutes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/oferta",
          element: <Offer />,
        },
        {
          index: true,
          path: "/oferta/:id",
          element: <DetailedOffer />,
        },
        {
          path: "/szkolenia",
          element: <Courses />,
        },
        {
          index: true,
          path: "/szkolenia/:id",
          element: <DetailedCourse />,
        },
        {
          path: "/oferta-grupowa",
          element: <GroupOffer />,
        },
        {
          path: "/o-nas",
          element: <About />,
        },
        {
          path: "/cennik",
          element: <Pricelist />,
        },
      ],
    },
  ])

  return <RouterProvider router={BrowserRoutes} />
}
