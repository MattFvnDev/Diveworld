import { Outlet } from "react-router-dom"

const CoursesLayout = () => {
  return (
    <div>
      Header
      <main>
        <Outlet />
      </main>
      Footer
    </div>
  )
}

export default CoursesLayout
