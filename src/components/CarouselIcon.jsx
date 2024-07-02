const CarouselIcon = ({title,icon }) => {
    return (
      <img
        width="195"
        height="96"
        src={icon}
        alt={title}
        className="h-14 w-auto transform-gpu sm:mx-0 sm:h-auto"
      />
    )
  }
  
  export default CarouselIcon