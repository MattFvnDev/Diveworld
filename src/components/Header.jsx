import { MobileNavbar, Logo, Navbar, Button, MenuSvg } from "./"
import { useState } from "react"

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
          href="/"
          className="hidden lg:inline-block border-mobilebackground bg-mobilebackground text-center rounded-full tracking-wider border text-default text-xl font-bold font-code transition delay-150 px-8 py-3 hover:text-accent hover:border-default hover:bg-default "
        >
          Gozo
        </Button>
      </div>
    </header>
  )
}

export default Header
