import { useLocation} from "react-router-dom"
import { convertPathnameToTitle } from "../services/convertService"
import {Button} from "./"

const Breadcrumbs = () => {
  const {pathname} = useLocation()
  const pathnames = pathname.split("/").filter((path) => path)
  return (
    <ul className="flex items-center">
      <li>
        <Button
          to="/"
          className="font-semibold text-base sm:text-2xl hover:underline"
        >
          Strona Głowna
        </Button>
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
                className={`font-semibold text-base sm:text-2xl ${to === pathname ? "text-accent" : "text-default"}`}
              >
                {title}
              </span>
            ) : (
              <Button
                to={to}
                className={`font-semibold text-base sm:text-2xl hover:underline ${to === pathname ? "text-accent" : "text-default"}`}
              >
                {title}
              </Button>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default Breadcrumbs
