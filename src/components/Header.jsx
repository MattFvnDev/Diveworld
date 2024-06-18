import {Logo} from "./"
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto p-5 flex justify-between max-w-screen-lg lg:max-w-screen-2xl">
        <Logo/>
        Navbar
      </div>
    </header>
  )
}

export default Header