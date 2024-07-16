import { check } from "../assets"
const FeaturesList = () => {
  return (
    <ul>
      <li className="flex items-start py-5 border-t border-active">
        <img src={check} alt="check" />
        <p className="text-sm ml-4 md:text-base text-default "></p>
      </li>
    </ul>
  )
}
export default FeaturesList
