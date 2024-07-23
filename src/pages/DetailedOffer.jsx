import { Card, PagesHeader } from "../components"
import { useParams } from "react-router-dom"
import { diveWorldOffers } from "../constants"
import { check } from "../assets"
const DetailedOffer = () => {
  const { id } = useParams()

  return (
    <>
      <PagesHeader />
      {diveWorldOffers
        .filter((offer) => offer.id === id)
        .map((offer) => (
          <section key={offer.id} className="py-10 lg:py-16 xl:pt-20 xl:pb-28">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2">
              <Card className="px-5 lg:max-w-xl">
                <h2 className="mb-4 text-3xl lg:text-4xl font-grotesk">
                  {offer.title}
                </h2>
                <p className="min-h-[4rem] mb-3 text-default/50 lg:text-lg">
                  {offer.specDescription}
                </p>

                <ul>
                  {offer.content.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-5 border-t border-active"
                    >
                      <img src={check} alt="check" />
                      <p className="text-sm ml-4 md:text-base text-default ">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </Card>
              
            </div>
          </section>
        ))}
    </>
  )
}

export default DetailedOffer