import { MobileButton } from "./"
import { useState } from "react"

const MobileMenu = () => {
    const [openNavigation, setOpenNavigation] = useState(false)
    const toggleNavigation = () => {
      if (openNavigation) {
        setOpenNavigation(false)
      } else {
        setOpenNavigation(true)
      }
    }
    return (
      <>
        <MobileButton
          openNavigation={openNavigation}
          toggleNavigation={toggleNavigation}
        />
      </>
    )
  }
  
  export default MobileMenu