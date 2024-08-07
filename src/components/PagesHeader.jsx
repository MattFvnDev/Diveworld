import {Breadcrumbs} from "./"
const PagesHeader = () => {
  return (
    <section>
      <div className="mx-auto px-5 max-w-screen-2xl">
        <div className="flex flex-col justify-end w-full relative h-[10rem]">
          <Breadcrumbs/>
        </div>
      </div>
    </section>
  )
}

export default PagesHeader
