import { diveWorldCourses } from "../constants"
import {Button, Card, Heading} from "./"

const BestCourses = () => {
  const bestCourses = diveWorldCourses.filter((course) => course.subCategory)
  const slideBackward = () => {
    let slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 308
  }

  const slideForward = () => {
    let slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 308
  }
  return (
    <section className="relative py-10 lg:py-16 xl:py-20 overflow-y-hidden">
      <div className="max-w-screen-2xl mx-auto px-5 ">
        <Heading
          tag="Szkolenia z Diveworld"
          title="Najczęściej wybierane szkolenia"
        />
        <div
          id="slider"
          className="flex gap-12 overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {bestCourses.map((course) => (
            <Card
              key={course.id}
              to={course.path}
              className="cursor-pointer border-2 border-default hover:border-accent duration-300 ease-in-out"
            >
              <div className="w-64">
                <img
                  src={course.img}
                  alt={`An image of ${course.title}`}
                  className="object-contain size-full"
                />
              </div>
            </Card>
          ))}
        </div>
        <div className="flex gap-2 items-start xl:gap-4 mt-6 justify-end mr-2">
          <Button title="scroll left" type="button" onClick={slideBackward}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="w-10 h-10 hover:text-accent"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"></path>
            </svg>
          </Button>
          <Button title="scroll right" type="button" onClick={slideForward}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="w-10 h-10 hover:text-accent"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"></path>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BestCourses
