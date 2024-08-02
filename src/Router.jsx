import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RootLayout, OfferLayout, CoursesLayout } from "./layouts"
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
    {
      path: "/oferta",
      element: <OfferLayout />,
      children: [
        {
          index: true,
          element: <Offer />,
        },
        {
          path: "/oferta/:id",
          element: <DetailedOffer />,
        },
      ],
    },
    {
      path: "/szkolenia",
      element: <CoursesLayout />,
      children: [
        {
          index: true,
          element: <Courses />,
        },
        {
          path: "/szkolenia/:id",
          element: <DetailedCourse />,
        },
      ],
    },
  ])

  return <RouterProvider router={BrowserRoutes} />
}
