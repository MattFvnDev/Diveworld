import { Card, Heading, PagesHeader } from "../components"
import { useParams } from "react-router-dom"
import { diveWorldCourses } from "../constants"

const DetailedCourse = () => {
  const { id } = useParams()
  return (
    <>
      <PagesHeader />
      {diveWorldCourses
        .filter((course) => course.id === id)
        .map((course) => (
          <section key={course.id} className="py-10 lg:py-16 xl:pt-20 xl:pb-28">
            <Card className="max-w-screen-2xl mx-auto px-5 flex flex-col gap-4">
              <Heading title={course.title} text={course.content} />
            </Card>
          </section>
        ))}
    </>
  )
}

export default DetailedCourse