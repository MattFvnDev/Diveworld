const Mask = ({img}) => {
  return (
    <div className="z-[-1] absolute inset-0">
        <div className="absolute z-[1] inset-0 bg-gradient-to-b from-background/80 from-5% via-background/10 to-background"></div>
        <div className="z-0 w-full h-screen relative overflow-hidden ">
          <img src={img} alt={`An image of ${img}`} className="object-cover" />
        </div>
      </div>
  )
}

export default Mask