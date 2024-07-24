import { useState } from "react"

const DetailedImages = ({ img, title, otherImgs }) => {
  const [image, setImage] = useState(img)
  const changeImage = (e) => {
    setImage(e.target.src)
  }

  return (
    <div className="flex flex-col px-5">
      <img
        src={image}
        alt=""
        className="object-cover object-center lg:h-4/5 aspect-square md:aspect-video rounded-[1rem] shadow-[0px_0px_25px_1px_rgba(255,255,255,1)]"
      />
      <div className="flex justify-center items-center gap-6 md:gap-12 xl:gap-16 my-16">
        {otherImgs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`An image of ${title}`}
            onClick={changeImage}
            className="w-20 h-20 md:w-24 lg:w-28 lg:h-24 xl:w-32 xl:h-28 object-cover cursor-pointer rounded-[1rem] transition-colors duration-300 delay-150 hover:border hover:border-active "
          />
        ))}
      </div>
    </div>
  )
}

export default DetailedImages