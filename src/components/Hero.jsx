import { herobackground } from "../assets"

const Hero = () => {
  return (
    <section className="relative">
      <div className="w-full h-screen">
        <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-gradient-to-b from-background/80 via-background/10 to-background"></div>
        <div className="w-full h-screen object-cover">
          <video
            className="w-full h-full object-cover"
            src={herobackground}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </section>
  )
}
export default Hero