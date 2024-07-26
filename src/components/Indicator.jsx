const Indicator = () => {
    return (
      <div className="opacity-20 animate-indicatorPulse last:[animation-delay:_1.3s] ">
        <svg
          width="40"
          height="15"
          viewBox="0 0 40 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 9L0 0l16.182 13.35a6 6 0 0 0 7.636 0L40 0 20 9z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    )
  }
  
  export default Indicator