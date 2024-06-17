import { Outlet } from "react-router-dom"

const OfferLayout = () => {
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

export default OfferLayout
