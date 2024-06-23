import { navigationLinks } from "../constants"
import { Link, useLocation } from "react-router-dom"

const Links = () => {
  const { pathname } = useLocation()
  return (
    <ul className="flex flex-wrap justify-center gap-2.5 lg:gap-4">
      {navigationLinks.map((navigationlink) => (
        <li key={navigationlink.id}>
          <Link
            to={`${navigationlink.path}`}
            className={`uppercase rounded-[32px] bg-transparent px-3 py-2 hover:bg-mobilebackground hover:text-default font-code text-base border-transparent font-bold tracking-wider transition-colors hover:border-active ${
              navigationlink.onlyMobile ? "hidden" : ""
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
  )
}

export default Links