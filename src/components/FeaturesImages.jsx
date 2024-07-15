import { sphere, stars } from "../assets"
const FeatureImages = () => {
  return (
    <div className="hidden relative justify-center mb-[6.5rem] md:flex">
      <img
        src={sphere}
        alt="Sphere"
        className="relative z-[1]"
        height="255"
        width="255"
      />
      <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <img
          src={stars}
          alt="Stars"
          className="w-full"
          width="950"
          height="400"
        />
      </div>
    </div>
  )
}

export default FeatureImages
