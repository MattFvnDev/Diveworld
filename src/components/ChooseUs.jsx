import { useState } from "react"
import { chooseUs } from "../constants"
import { Button, ChooseUsContent, Glow } from "./"
const ChooseUs = () => {
  const [index, setIndex] = useState(0)
  const { mainTitle, content } = chooseUs[0]
  return (
    <section className="mx-auto max-w-screen-2xl px-5 py-8">
      <div className="hidden md:flex relative justify-center">
        <div className="absolute translate-x-1/2 translate-y-1/2 ">
          <Glow />
        </div>
      </div>
      <div className="max-w-[50rem] mx-auto mb-12 lg:mb-20 lg:text-center">
        <h2 className="text-accent font-semibold mt-4 mb-8 md:mb-12 xl:mb-16 text-2xl leading-none md:text-3xl lg:text-4xl xl:text-5xl">
          {mainTitle}
        </h2>
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 ">
        <div className="flex flex-col space-y-8 mt-8 items-center sm:flex-row sm:space-y-0 sm:mt-0 sm:justify-between sm:space-x-4 md:flex-col md:items-baseline md:w-2/5 md:justify-start md:space-y-12">
          {content.map((item, itemIndex) => (
            <Button
              key={itemIndex}
              onClick={() => setIndex(itemIndex)}
              className={`flex justify-center rounded-full w-full max-w-64 border-2 border-accent transition-all duration-300 px-8 py-4  hover:border-default group ${index === itemIndex && "bg-mobilebackground border-active"}`}
            >
              <img
                src={item.icon}
                alt={`An icon of title: ${item.title}`}
                className={`${index === itemIndex && "animate-pulse"} group-hover:animate-bounce `}
              />
            </Button>
          ))}
        </div>
        <div className="min-h-[580px] md:w-3/5 lg:max-w-3xl flex flex-col gap-y-4">
          {content[index].info.map((item, itemIndex) => (
            <ChooseUsContent key={itemIndex} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
