import { check } from "../assets"
const FeaturesList = ({feature}) => {
  const {features} = feature
  return (
    <ul>
      {features.map((feature, index) => (
        <li
          key={index}
          className="flex items-start py-5 border-t border-active"
        >
          <img src={check} alt="check" />
          <p className="text-sm ml-4 md:text-base text-default ">{feature}</p>
        </li>
      ))}
    </ul>
  )
}
export default FeaturesList
