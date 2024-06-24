import { Link } from "react-router-dom"
import { Address, Links, SocialIcons, Logo } from "./"


const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <div className="mx-auto max-w-screen-2xl flex flex-col items-center gap-12 px-5 py-6 sm:px-8 md:items-start">
        <div className="flex flex-col gap-12 lg:w-full lg:flex-row lg:items-center lg:justify-between">
          <nav>
            <Links />
          </nav>
          <SocialIcons />
        </div>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:flex lg:gap-x-10">
          <Address country="Polska" city="Wrocław" />
          <Address country="Malta/Gozo" city="Zebbug" />
        </ul>
        <hr className="h-px w-full border-0 bg-active" />
        <div className="grid grid-cols-12 gap-6 lg:flex-row">
          <div className="col-span-12 flex flex-col gap-6 lg:col-span-5">
            <Logo/>
            <p className="text-xs leading-normal font-grotesk font-medium text-default/70">
              Copyright © Diveworld<sup>®</sup> 2011-{currentYear}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="text-xs leading-normal font-grotesk font-medium text-default/70">
              Polski instruktor nurkowania na Gozo - Wszystko powstało po prostu
              z pasji.Polski instruktor nurkowania na Gozo - Wszystko powstało
              po prostu z pasji. Polski instruktor nurkowania na Gozo - Wszystko
              powstało po prostu z pasji.
            </p>
            <ul className="mt-7 flex gap-4">
              <li>
                <Link
                  to="/cennik"
                  className="text-xs leading-normal font-semibold font-grotesk text-default hover:underline"
                >
                  Cennik
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-xs leading-normal font-semibold font-grotesk text-default hover:underline"
                >
                  Gozo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer