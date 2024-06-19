import { MobileMenu, Logo } from "./"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 border-b border-active/30 z-50">
      <div className="mx-auto p-5 flex justify-between max-w-screen-2xl">
        <Logo />
        <MobileMenu />
      </div>
    </header>
  )
}

export default Header
