import { navigationLinks } from "../constants"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center space-x-4 gap-4">
        {navigationLinks.map((navigationlink) => (
          <li key={navigationlink.id} className="">
            <NavLink
              to={`${navigationlink.path}`}
              className={({ isActive }) =>
                isActive
                  ? "hover:text-active text-xl tracking-wide font-bold font-code text-accent"
                  : "text-xl tracking-wide font-bold font-code text-default/70 hover:text-active"
              }
            >
              {navigationlink.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
