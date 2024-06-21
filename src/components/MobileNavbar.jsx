import { navigationLinks } from "../constants"
import { Link, useLocation } from "react-router-dom"

const MobileNavbar = ({ openNavigation, toggleNavigation }) => {
  const { pathname } = useLocation()
  return (
    <div
      className={`fixed inset-x-0 bottom-0 h-screen bg-mobilebackground duration-500 delay-150 ease-linear ${openNavigation ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} lg:hidden`}
    >
      <nav className="relative inset-x-0 top-[96px] bottom-0 overflow-auto items-center border-t ">
        <ul className="flex flex-col p-5 space-y-2">
          {navigationLinks.map((navigationlink) => (
            <li key={navigationlink.id} className="text-start leading-10">
              <Link
                to={`${navigationlink.path}`}
                onClick={toggleNavigation}
                className={`font-bold font-code text-2xl hover:text-active transition delay-150 tracking-wide ${pathname === navigationlink.path ? "text-active" : "text-default"}`}
              >
                {navigationlink.title}
              </Link>
            </li>
          ))}
          <Link
            to="/"
            onClick={toggleNavigation}
            className="w-full max-w-sm border-default inline-block text-center rounded-full tracking-wider border text-default text-2xl font-bold font-code transition delay-150 focus-visible:ring px-8 py-4 self-center hover:text-black hover:border-active hover:bg-default"
          >
            Gozo
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNavbar
