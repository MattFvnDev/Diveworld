import { diveWorldOffers } from "../constants"
import { Card, Heading } from "./"
const Trending = () => {
  return (
    <section className="relative py-10 lg:py-16 xl:py-20">
      <div className="mx-auto px-5 md:px-10 lg:px-16">
        <Heading tag="Zanurkuj z Diveworld" title="Najlepsze z naszej oferty" />
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
                  <h3 className="text-base md:text-xl lg:text-2xl 2xl:text-3xl text-accent font-semibold relative inline-block after:bg-active after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-700 ">
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