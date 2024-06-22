import { navigationLinks } from "../constants"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const { pathname } = useLocation()
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center space-x-4">
        {navigationLinks.map((navigationlink) => (
          <li key={navigationlink.id} className="">
            <Link
              to={`${navigationlink.path}`}
              className={`rounded-[32px] bg-transparent px-3 py-2 hover:bg-mobilebackground hover:text-default font-code text-xl border-transparent font-bold tracking-wide transition-colors hover:border-active ${
                navigationlink.onlyMobile ? "lg:hidden" : ""
              } ${
                navigationlink.path === pathname
                  ? "text-accent"
                  : "text-default/70"
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

export default Navbar
