import { Link } from "react-router-dom"

const Chip = ({ title, link }) => {
  return (
    <li>
      <Link
        to={`${link}`}
        className="text-xs leading-normal font-semibold font-grotesk text-default hover:underline"
      >
        {title}
      </Link>
    </li>
  )
}

export default Chip