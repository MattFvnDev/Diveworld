import { Button, NavLinks} from "./"

const MobileNavbar = ({ openNavigation, toggleNavigation }) => {
  
  return (
    <div
      className={`fixed inset-x-0 bottom-0 top-0 flex w-full flex-col bg-background duration-500 delay-150 ease-linear ${openNavigation ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} lg:hidden`}
    >
      <div className="relative top-[96px] h-[calc(100vh-96px)] overflow-auto px-5 py-3 space-y-4 border-t border-t-default">
        <NavLinks toggleNavigation={toggleNavigation}/>
        <Button
          onClick={toggleNavigation}
          to="/"
          className="inline-block w-full max-w-sm border-mobilebackground bg-mobilebackground text-center rounded-full tracking-wider border text-default text-xl font-bold font-code transition delay-150 px-8 py-4 hover:text-default hover:border-active hover:bg-transparent"
        >
          Dive in Gozo
        </Button>
      </div>
    </div>
  )
}

export default MobileNavbar
