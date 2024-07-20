import brackets from "../assets/svg/Brackets"

const Tag = ({ className, children }) => {
  return (
    <div className={`font-grotesk font-light text-xs uppercase flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-2 font-medium text-default/70">{children}</div>
      {brackets("right")}
    </div>
  )
}

export default Tag