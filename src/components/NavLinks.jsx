import { navigationLinks } from "../constants"
import { Link, useLocation } from "react-router-dom"

const NavLinks = ({toggleNavigation}) => {
  const { pathname } = useLocation()
  return (
    <nav>
      <ul className="block">
        {navigationLinks.map((navigationlink) => (
          <li
            key={navigationlink.id}
            className="flex-1 border-b border-default py-4 last:border-0"
          >
            <Link
              to={`${navigationlink.path}`}
              onClick={toggleNavigation}
              className={`font-bold font-code text-xl hover:text-active transition delay-150 tracking-wide ${pathname === navigationlink.path ? "text-active" : "text-default"} ${
                navigationlink.onlyMobile ? "lg:hidden" : ""
              }`}
            >
              {navigationlink.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
