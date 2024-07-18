import { diveWorldOffers } from "../constants"
import { Card } from "./"
const Trending = () => {
  return (
    <section className="relative py-10 lg:py-16 xl:py-20">
      <div className="mx-auto px-5 md:px-10 lg:px-16">
        <div className="max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center">
          <div className="font-grotesk font-normal text-xs uppercase flex items-center mb-4 md:justify-center">
            <svg
              width="5"
              height="14"
              viewBox="0 0 5 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 0.822266H1V12.8223H5"
                stroke="url(#brackets-left)"
              ></path>
              <defs>
                <linearGradient
                  id="brackets-left"
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#82c9ff"></stop>
                  <stop offset="100%" stopColor="#3d5ff8"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="mx-2 font-medium text-default/70">
              Zanurkuj z Diveworld
            </div>
            <svg
              width="5"
              height="14"
              viewBox="0 0 5 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-2.98023e-08 0.822266H4V12.8223H-2.98023e-08"
                stroke="url(#brackets-right)"
              ></path>
              <defs>
                <linearGradient
                  id="brackets-right"
                  x1="14.635%"
                  x2="14.635%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#82c9ff"></stop>
                  <stop offset="100%" stopColor="#3d5ff8"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="text-2xl leading-none md:text-3xl lg:text-4xl xl:text-5xl">
            Najlepsze z naszej oferty
          </h2>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {diveWorldOffers.map((diveWorldOffer) => (
            <Card
              to={`${diveWorldOffer.path}`}
              key={diveWorldOffer.id}
              className="border border-active rounded-[2rem] transition-transform duration-300 delay-150 ease-in-out hover:-translate-y-4 hover:border-accent group"
            >
              <div className="relative">
                <img
                  src={diveWorldOffer.img}
                  alt={`An image of ${diveWorldOffer.title}`}
                  className="object-contain size-full rounded-t-[2rem]"
                />
              </div>
              <div className="flex items-center justify-between px-4 md:px-5 py-8 md:py-10 ">
                <div className="space-y-2 lg:space-y-3">
                  <h3 className="text-base md:text-xl lg:text-2xl 2xl:text-3xl text-accent font-semibold relative after:bg-active after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-700 ">
                    {diveWorldOffer.title}
                  </h3>
                  <p className="text-sm md:text-base 2xl:text-lg text-default/50">
                    {diveWorldOffer.description}
                  </p>
                </div>
                <div className="flex gap-2 self-end">
                  <img
                    src={diveWorldOffer.icon}
                    alt={`an icon of${diveWorldOffer.icon}`}
                    className="transition-transform duration-500 delay-150 transform-gpu group-hover:-rotate-[24.5deg] "
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trending