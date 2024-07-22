import { Link } from "react-router-dom"
import { Card, FeatureImages, FeaturesList, Heading } from "./"
import { diveWorldFeatures } from "../constants"

const Features = () => {
  return (
    <section className="py-10 lg:py-16 xl:py-20 overflow-hidden">
      <div className="mx-auto w-full max-w-screen-2xl p-5 relative z-[2]">
        <FeatureImages />
        <Heading
          tag="Rozpocznij przygodę z Diveworld"
          title="Zanurkuj raz, skorzystaj na zawsze"
        />
        <div className="mx-auto max-w-screen-xl lg:max-w-screen-2xl">
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
            {diveWorldFeatures.map((feature) => (
              <Card
                key={feature.id}
                className="border shadow-none transition-shadow duration-300 delay-150 ease-in-out px-5 border-accent rounded-[2rem] even:py-14 odd:py-8 odd:my-4 [&>h3]:first:text-default [&>h3]:even:text-accent [&>h3]:last:text-active hover:shadow-[0px_0px_25px_1px_rgba(130,201,255,1)] cursor-pointer"
              >
                <h3 className="mb-4 text-3xl lg:text-4xl font-grotesk">
                  {feature.title}
                </h3>
                <p className="min-h-[4rem] mb-3 text-default/50 lg:text-lg">
                  {feature.description}
                </p>
                <Link
                  to={`${feature.path}`}
                  className="relative rounded-full inline-flex items-center justify-center py-4 px-8 transition-colors bg-accent border border-accent w-full mb-6 lg:mb-8 hover:bg-transparent hover:text-active font-semibold tracking-wider"
                >
                  Szczegóły
                </Link>
                <FeaturesList feature={feature} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features