import { herobackground } from "../assets"
import { Button, Indicator, Mask } from "./"

const Hero = () => {
  return (
    <section className="min-h-screen">
      <div className="relative px-5">
        <div className="w-full max-w-xl mx-auto ">
          <div className="relative flex flex-col items-center justify-center min-h-svh">
            <div className="py-16">
              <div className="pt-8 text-center">
                <div className="mb-8">
                  <h1 className="font-bold text-4xl text-accent md:text-5xl lg:text-6xl font-grotesk mb-6 ">
                    Diveworld
                  </h1>
                </div>
                <p className="text-lg font-medium mx-auto mb-12 max-w-lg lg:text-2xl text-default/80 font-grotesk">
                  Odkryj dlaczego Gozo jest najlepszą wyspą do nurkowania pośród
                  Archipelagu Wysp Maltańskich.
                </p>
                <div className="w-full flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:gap-x-10">
                  <Button
                    to="/"
                    className="inline-block rounded-full w-full max-w-64 border text-base font-bold cursor-pointer border-accent bg-accent tracking-wider text-default font-grotesk transition delay-150 px-8 py-4"
                  >
                    Zanurkuj na Gozo
                  </Button>
                  <Button
                    to="/oferta"
                    className="inline-block rounded-full w-full max-w-64 border text-base font-bold cursor-pointer border-default bg-default tracking-wider text-black font-grotesk transition delay-150 px-8 py-4 hover:text-default hover:border-black hover:bg-black"
                  >
                    Sprawdź ofertę
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mask video={herobackground} />
      <div className="absolute inset-x-0 my-0 mx-auto bottom-6 opacity-100 ">
        <div className="relative flex flex-col items-center ">
          <Indicator />
          <Indicator />
        </div>
      </div>
    </section>
  )
}

export default Hero
