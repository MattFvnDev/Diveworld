
import { herobackground } from "../assets"

const Hero = () => {
  return (
    <section className="min-h-screen">
      <div className="z-[-1] absolute inset-0">
        <div className="absolute z-[1] top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-background/80 via-background/10 to-background"></div>
        <div className="z-0 object-cover w-full h-screen relative overflow-hidden">
          <video
            className="object-cover w-full h-screen absolute inset-0"
            autoPlay
            loop
            muted
          >
            <source src={herobackground} />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero
