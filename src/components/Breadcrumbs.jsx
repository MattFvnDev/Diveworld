import { useLocation, Link } from "react-router-dom"
import { convertPathnameToTitle } from "../services/convertService"

const Breadcrumbs = () => {
  const location = useLocation()
  console.log(location)
  const pathnames = location.pathname.split("/").filter((path) => path)
  return (
    <ul className="flex items-center">
      <li>
        <Link
          to="/"
          className="font-semibold text-base sm:text-2xl hover:underline"
        >
          Strona Głowna
        </Link>
      </li>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1
        const to = `/${pathnames.slice(0, index + 1).join("/")}`
        const title = convertPathnameToTitle(value)
        return (
          <li key={to} className={`flex items-center  `}>
            <span className="mx-3 flex font-semibold text-base sm:text-2xl">
              &gt;
            </span>
            {last ? (
              <span
                className={`font-semibold text-base sm:text-2xl ${to === location.pathname ? "text-accent" : "text-default"}`}
              >
                {title}
              </span>
            ) : (
              <Link
                to={to}
                className={`font-semibold text-base sm:text-2xl hover:underline ${to === location.pathname ? "text-accent" : "text-default"}`}
              >
                {title}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default Breadcrumbs
