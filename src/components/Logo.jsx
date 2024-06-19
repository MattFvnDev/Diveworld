import { Link } from "react-router-dom"
import { logo } from "../assets"
const Logo = () => {
  return (
    <Link className="flex items-center space-x-2 z-50"  to="/">
      <div className="w-[56px] h-[56px] rounded-full bg-white">
        <img
          src={logo}
          alt="Diveworld Logo"
          className="object-contain rounded-full"
          width={56}
          height={56}
        />
      </div>
      <span className="inline-flex text-2xl font-bold text-active ">
        Diveworld
      </span>
    </Link>
  )
}

export default Logo
