const Address = ({ country, city }) => {
    return (
      <li>
        <address className="flex flex-col gap-2 not-italic lg:w-44">
          <span className="text-base leading-normal font-bold text-default">
            {country}
          </span>
          <p className="text-sm  leading-normal font-medium text-default/70">
            {city}
          </p>
        </address>
      </li>
    )
  }
  
  export default Address