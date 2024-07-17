import { navigationLinks } from "../constants"
import { useLocation } from "react-router-dom"
import {Button} from "./"

const NavLinks = ({ toggleNavigation }) => {
  const { pathname } = useLocation()
  return (
    <nav>
      <ul className="block">
        {navigationLinks.map((navigationlink) => (
          <li
            key={navigationlink.id}
            className="flex-1 border-b border-default py-4 last:border-0"
          >
            <Button
              to={`${navigationlink.path}`}
              onClick={toggleNavigation}
              className={`font-bold font-code text-base hover:text-active transition delay-150 inline-block rounded-[32px] bg-transparent px-3 py-2 -mx-3 w-[calc(100%+1.5rem)] ${pathname === navigationlink.path ? "text-active" : "text-default"} ${
                navigationlink.onlyMobile ? "lg:hidden" : ""
              }`}
            >
              {navigationlink.title}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
