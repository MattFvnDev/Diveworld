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
    <header className="fixed top-0 left-0 right-0 border-b z-50">
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
      </div>
    </header>
  )
}

export default Header
