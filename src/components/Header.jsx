import { useState } from "react"
import { MobileNavbar, Logo, Navbar, Button, MenuSvg } from "./"
import { malta } from "../assets"

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false)
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false)
    } else {
      setOpenNavigation(true)
    }
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto p-5 flex justify-between max-w-screen-2xl">
        <Logo />
        <Button
          type="button"
          className="transition duration-300 delay-150 ease-in-out block rounded-full border-2 p-3 border-active group hover:border-default z-50 lg:hidden "
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
        <MobileNavbar
          toggleNavigation={toggleNavigation}
          openNavigation={openNavigation}
        />
        <Navbar />
        <Button
          to="/"
          className="hidden lg:inline-flex relative items-center justify-center overflow-hidden min-w-48 duration-700 ease-out border-default bg-default/30 text-center rounded-full tracking-widest border-2 text-lg font-bold font-code transition delay-200 px-8 py-3 group hover:border-active"
        >
          <span className="absolute inset-0 flex items-center justify-center duration-500 -translate-x-full group-hover:translate-x-0">
            <img src={malta} alt="An icon of Maltese Archipelago" />
          </span>
          <span className="absolute flex items-center text-lg font-semibold justify-center w-full h-full text-default transition-all duration-300 transform group-hover:translate-x-full">
            Gozo
          </span>
        </Button>
      </div>
    </header>
  )
}

export default Header
