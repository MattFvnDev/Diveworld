import { Outlet } from "react-router-dom"
import { Header, Footer } from "../components"

const CoursesLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default CoursesLayout
