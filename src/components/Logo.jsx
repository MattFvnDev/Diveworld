import { logo } from "../assets"
import {Button} from "./"
const Logo = () => {
  return (
    <Button className="flex items-center space-x-2" to="/">
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
    </Button>
  )
}

export default Logo
