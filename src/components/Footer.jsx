import {Links} from "./"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-screen-2xl flex items-center gap-12 px-5 py-6 sm:px-8 md:items-start">
      <div className="flex flex-col gap-12 lg:w-full lg:flex-row lg:items-center lg:justify-between">
        <nav>
          <Links/>
        </nav>
      </div>
    </footer>
  )
}

export default Footer


