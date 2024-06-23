import { Links, SocialIcons } from "./"

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-screen-2xl flex items-center gap-12 px-5 py-6 sm:px-8 md:items-start">
        <div className="flex flex-col gap-8 lg:gap-5 lg:w-full lg:flex-row lg:items-center lg:justify-between">
          <nav>
            <Links />
          </nav>
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}

export default Footer