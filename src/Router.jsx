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
          path: "/oferta-grupowa",
          element: <GroupOffer />,
        },
        {
          path:"/szkolenia",
          element:<Courses/>
        },
        {
          path: "/szkolenia/:id",
          element: <DetailedCourse />,
        },

        {
          path: "/oferta/:Id",
          element: <DetailedOffer />,
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
