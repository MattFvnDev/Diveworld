const ChooseUsContent = ({ subTitle, stage }) => {
  return (
    <div className="flex flex-col space-y-2 max-w-2xl">
      <h2 className="font-semibold text-xl">{subTitle}</h2>
      <p className="font-medium text-default/70">{stage}</p>
    </div>
  )
}

export default ChooseUsContent
