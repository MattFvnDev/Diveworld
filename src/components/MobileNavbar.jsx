import { navigationLinks } from "../constants"
import { Link, useLocation } from "react-router-dom"

const MobileNavbar = ({ openNavigation, toggleNavigation }) => {
  const { pathname } = useLocation()
  return (
    <div
      className={`fixed inset-x-0 bottom-0 top-[96px] flex w-full flex-col bg-mobilebackground duration-500 delay-150 ease-linear overflow-auto ${openNavigation ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 -top-0"} lg:hidden`}
    >
      <nav className="flex flex-col justify-center items-center p-5 ">
        <ul className="flex flex-col gap-4 w-full">
          {navigationLinks.map((navigationlink) => (
            <li key={navigationlink.id} className="text-start sm:text-center">
              <Link
                to={`${navigationlink.path}`}
                onClick={toggleNavigation}
                className={`font-bold font-code text-2xl hover:text-active transition delay-200 tracking-wide ${pathname === navigationlink.path ? "text-active" : "text-default"}`}
              >
                {navigationlink.title}
              </Link>
            </li>
          ))}
          <button
            type="button"
            className="w-full max-w-sm focus-ring-purple inline-block rounded-full border text-base font-bold focus-visible:ring px-8 py-4 mt-8 self-center"
          >
            Gozo
          </button>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNavbar