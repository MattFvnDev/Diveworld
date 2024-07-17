import { Outlet } from "react-router-dom"
import { Header, Footer } from "../components"

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
