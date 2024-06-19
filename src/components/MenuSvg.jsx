const MenuSvg = ({ openNavigation }) => {
    return (
      <svg
        className="overflow-visible "
        width="28"
        height="28"
        viewBox="0 0 26 26"
        fill="currentColor"
      >
        <rect
          className=" origin-center group-hover:fill-active duration-300 delay-150 ease-in-out "
          y={openNavigation ? "12" : "8"}
          x={0}
          rx={1}
          width="26"
          height="2"
          fill="white"
          transform={`rotate(${openNavigation ? "45" : "0"})`}
        />
        <rect
          className=" origin-center group-hover:fill-active duration-300 delay-150 ease-in-out"
          y={openNavigation ? "12" : "16"}
          rx={1}
          x={0}
          width="26"
          height="2"
          fill="white"
          transform={`rotate(${openNavigation ? "-45" : "0"})`}
        />
      </svg>
    )
  }
  
  export default MenuSvg