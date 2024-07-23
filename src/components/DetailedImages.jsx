import { useState } from "react"

const DetailedImages = ({ img, otherImgs }) => {
  const [image, setImage] = useState(img)
  const changeImage = (e) => {
    setImage(e.target.src)
  }
  return (
    <div className="flex flex-col">
      <img
        src={image}
        alt=""
        className="object-cover object-center lg:h-4/5 md:justify-center aspect-square md:aspect-video"
      />
      <div className="flex justify-center items-center gap-4 lg:gap-8 xl:gap-16 mt-16">
        <img
          onClick={changeImage}
          src={img}
          className="w-20 h-20 lg:w-28 lg:h-28 object-cover cursor-pointer "
        />
        <img
          onClick={changeImage}
          src={otherImgs[0]}
          className="w-20 h-20 lg:w-28 lg:h-28 object-cover cursor-pointer "
        />
        <img
          onClick={changeImage}
          src={otherImgs[1]}
          className="w-20 h-20 lg:w-28 lg:h-28 object-cover cursor-pointer"
        />
      </div>
    </div>
  )
}

export default DetailedImages