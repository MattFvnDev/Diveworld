import { Button } from "./"
import { navigationLinks } from "../constants"
import { Link, useLocation } from "react-router-dom"

const MobileNavbar = ({ openNavigation, toggleNavigation }) => {
  const { pathname } = useLocation()
  return (
    <div
      className={`fixed inset-x-0 bottom-0 top-0 flex w-full flex-col bg-mobilebackground duration-500 delay-150 ease-linear ${openNavigation ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} lg:hidden`}
    >
      <div className="relative top-[96px] h-[calc(100vh-96px)] overflow-auto px-5 space-y-4">
        <nav>
          <ul className="flex-wrap justify-center block ">
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
        <Button
          type="button"
          onClick={toggleNavigation}
          href="/"
          className="inline-block w-full max-w-sm border-default bg-default text-center rounded-full tracking-wider border text-accent text-xl font-bold font-code transition delay-150 px-8 py-4 hover:text-default hover:border-active hover:bg-transparent"
        >
          Dive in Gozo
        </Button>
      </div>
    </div>
  )
}

export default MobileNavbar