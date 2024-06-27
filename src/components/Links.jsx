import { navigationLinks } from "../constants"
import { Link, useLocation } from "react-router-dom"

const Links = () => {
  const { pathname } = useLocation()
  return (
    <ul className="flex flex-wrap justify-center gap-2">
      {navigationLinks.map((navigationlink) => (
        <li key={navigationlink.id}>
          <Link
            to={`${navigationlink.path}`}
            className={`uppercase inline-block px-3 py-2 font-code text-base font-bold tracking-wider transition-colors group  ${
              navigationlink.onlyMobile ? "hidden" : ""
            } ${
              navigationlink.path === pathname
                ? "text-accent"
                : "text-default/70"
            }`}
          >
            <div className="flex h-6 overflow-hidden flex-col ">
              <div className="duration-500 ease-in-out group-hover:-translate-y-6">
                {navigationlink.title}
              </div>
              <div className="duration-500 ease-in-out text-default group-hover:-translate-y-6">
                {navigationlink.title}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Links
