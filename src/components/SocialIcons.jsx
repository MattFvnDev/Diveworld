import { socialLinks } from "../constants"
import {Button} from "./"

const SocialIcons = () => {
  return (
    <ul className="m-auto flex w-full h-12 max-w-sm justify-between rounded-md border border-active md:m-0">
      {socialLinks.map((socialLink) => (
        <li
          key={socialLink.id}
          className="group flex-1 first:rounded-l last:rounded-r hover:bg-mobilebackground"
        >
          <Button
            to={`${socialLink.url}`}
            target="_blank"
            className="flex size-full items-center justify-center rounded"
          >
            <img
              src={socialLink.iconUrl}
              alt={`An icon of ${socialLink.title}`}
              className="group-hover:-translate-y-1 transition ease-in-out duration-300"
            />
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default SocialIcons