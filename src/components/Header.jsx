import { MobileNavbar, MobileButton, Logo } from "./"
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
    <header className="fixed top-0 left-0 right-0 border-b border-active/30 z-50">
      <div className="mx-auto p-5 flex justify-between max-w-screen-2xl">
        <Logo />
        <MobileButton
          openNavigation={openNavigation}
          toggleNavigation={toggleNavigation}
        />
      </div>
      <MobileNavbar
        toggleNavigation={toggleNavigation}
        openNavigation={openNavigation}
      />
    </header>
  )
}

export default Header
