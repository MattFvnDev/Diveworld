import { CarouselIcon } from "./"
import { carouselIcons } from "../constants"

const Carousel = () => {
  return (
    <section className="bg-default relative m-auto flex h-[5.5rem] md:h-[6rem] max-w-screen-[1920px] items-center overflow-hidden">
      <div className="flex flex-none animate-moveCarouselIconLeft">
        {carouselIcons.map((carouselIcon) => (
          <CarouselIcon key={carouselIcon.id} {...carouselIcon} />
        ))}
      </div>
      <div className="flex flex-none animate-moveCarouselIconLeft">
        {carouselIcons.map((carouselIcon) => (
          <CarouselIcon key={carouselIcon.id} {...carouselIcon} />
        ))}
      </div>
    </section>
  )
}

export default Carousel