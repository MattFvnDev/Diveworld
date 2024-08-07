const Mask = ({ img, video }) => {
  const renderImage = () => (
    <div className="z-[-1] absolute inset-0">
      <div className="absolute z-[1] inset-0 bg-gradient-to-b from-background/80 from-5% via-background/10 to-background"></div>
      <div className="z-0 w-full h-screen relative overflow-hidden ">
        <img
          src={img}
          alt={`An image of ${img}`}
          className="object-cover size-full absolute inset-0"
        />
      </div>
    </div>
  )
  const renderVideo = () => (
    <div className="z-[-1] absolute inset-0">
      <div className="absolute z-[1] top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-background/80 via-background/10 to-background min-h-screen"></div>
      <div className="z-0 object-cover w-full h-screen relative overflow-hidden">
        <video
          className="object-cover w-full h-screen absolute inset-0"
          autoPlay
          loop
          muted
        >
          <source src={video} />
        </video>
      </div>
    </div>
  )

  return video ? renderVideo() : renderImage()
}

export default Mask
