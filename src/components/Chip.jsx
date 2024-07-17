import {Button} from "./"

const Chip = ({ title, link }) => {
  return (
    <li>
      <Button
        to={`${link}`}
        className="text-xs leading-normal font-semibold font-grotesk text-default hover:underline"
      >
        {title}
      </Button>
    </li>
  )
}

export default Chip