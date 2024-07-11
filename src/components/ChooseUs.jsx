import { useState } from "react"
import { chooseUs } from "../constants"
import { Button, ChooseUsContent } from "./"
const ChooseUs = () => {
  const [index, setIndex] = useState(0)
  const { mainTitle, content } = chooseUs[0]
  return (
    <section className="mx-auto max-w-screen-2xl p-5 ">
      <h1 className="text-accent font-semibold text-2xl mt-8 mb-8 md:text-3xl xl:text-4xl md:mb-12 xl:mb-16">
        {mainTitle}
      </h1>
      <div className="flex flex-col-reverse md:flex-row w-full md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 ">
      <div className="flex flex-col space-y-8 mt-8 items-center sm:flex-row sm:space-y-0 sm:mt-0 sm:justify-between sm:space-x-4 md:flex-col md:items-baseline md:w-1/3 md:justify-start md:space-y-12">
          {content.map((item, itemIndex) => (
            <Button
              key={itemIndex}
              onClick={() => setIndex(itemIndex)}
              className={`inline-block rounded-md w-full max-w-48 border text-base font-bold cursor-pointer border-accent bg-accent tracking-wider text-default font-grotesk transition delay-150 px-8 py-4 hover:bg-white hover:text-black hover:border-black ${index === itemIndex && "bg-mobilebackground border-default"}`}
            >
              {item.title}
            </Button>
          ))}
        </div>
        <div className="min-h-[480px] flex flex-col gap-y-6 md:w-2/3 ">
          {content[index].info.map((item, itemIndex) => (
            <ChooseUsContent key={itemIndex} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChooseUs