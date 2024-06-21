import { MobileNavbar, MobileButton, Logo, Navbar } from "./"
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
        <Navbar />
        <MobileButton
          openNavigation={openNavigation}
          toggleNavigation={toggleNavigation}
        />
        <MobileNavbar
          toggleNavigation={toggleNavigation}
          openNavigation={openNavigation}
        />
      </div>
    </header>
  )
}

export default Header
