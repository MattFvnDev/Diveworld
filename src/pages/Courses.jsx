import { coursesbackground} from "../assets"
import { Button, PagesHeader, Heading, Mask } from "../components"
import { diveWorldCourses } from "../constants"
const Courses = () => {
  return (
    <>
      <Mask img={coursesbackground}/>
      <PagesHeader />
      <section>
        <div className="px-5 pt-20 text-center">
          <Heading
            title="Szkolenia Nurkowe"
            text="W naszym centrum nurkowym szkolenia podzieliliśmy na pięć głównych pionów oraz stopnie i poziomy uznaniowe. Szkolenia dla nurków początkujących (Scuba Experience), programy specjalizacji dla nurków certyfikowanych, szkolenia Extendend Range (XR) dla nurków zaawansowanych oraz szkolenie profesjonalistów nurkowych (DIVE PRO)."
          />
        </div>
        <div className="mx-auto max-w-screen-2xl px-5">
          <div className="flex items-center justify-between border-b border-active pb-4 pt-16">
            <h3 className="text-xl font-semibold lg:text-2xl">
              {diveWorldCourses.length} Szkoleń
            </h3>
            <div className="flex items-center">
              <button className="flex h-10 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-[180px]">
                <span className="pointer-events-none">Sortuj</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 sm:ml-0 h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-default sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filtry</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
              </button>
            </div>
          </div>
          <section className="pb-24 pt-6">
            <h3 className="sr-only">Szkolenia</h3>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <div className="hidden lg:block">
                <form className="sticky top-20">
                  <h4 className="sr-only">Kategorie</h4>
                  <div>
                    <div className="border-b">
                      <h4 className="flex">
                        <button
                          type="button"
                          className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
                        >
                          <span>Kategorie</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 transition-transform duration-300"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>
                      </h4>
                    </div>
                  </div>
                </form>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-10">
                {diveWorldCourses.map((course) => (
                  <Button
                    to={`${course.path}`}
                    key={course.id}
                    className="group"
                  >
                    <div className="size-full overflow-hidden rounded-[1rem] border-2 border-default hover:border-accent transition group-hover:opacity-80">
                      <img
                        src={course.img}
                        alt={`An image of ${course.title}`}
                        className="size-full object-cover object-center"
                      />
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Courses