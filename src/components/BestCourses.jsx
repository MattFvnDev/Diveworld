import { diveWorldCourses } from "../constants"
import {Heading, Card} from "./"
const BestCourses = () => {
  const bestCourses = diveWorldCourses.filter((course) => course.subCategory)

  return (
    <section className="relative py-10 lg:py-16 xl:py-20">
      <div className="max-w-screen-2xl mx-auto px-5 ">
        <Heading
          tag="Szkolenia z Diveworld"
          title="Najczęściej wybierane szkolenia"
        />
        <div
          className="flex gap-12 overflow-hidden whitespace-nowrap scroll-smooth relative"
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
       
      </div>
    </section>
  )
}

export default BestCourses
