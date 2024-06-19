import {MenuSvg} from "./"

const MobileButton = ({ openNavigation, toggleNavigation }) => {
  return (
    <button
      onClick={toggleNavigation}
      className="transition duration-300 delay-150 ease-in-out block rounded-full border-2 p-3 border-active group hover:border-default z-50 lg:hidden "
    >
      <MenuSvg openNavigation={openNavigation} />
    </button>
  )
}

export default MobileButton