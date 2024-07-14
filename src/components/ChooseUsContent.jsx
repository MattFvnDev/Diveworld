const ChooseUsContent = ({ title, subTitle, stage }) => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-4 md:mb-6 font-semibold text-start text-2xl md:text-3xl xl:text-4xl text-active">
        {title}
      </h2>
      <div className="flex flex-col gap-y-2">
        <h3 className="font-semibold text-xl">{subTitle}</h3>
        <p className="font-medium text-default/70">{stage}</p>
      </div>
    </div>
  )
}

export default ChooseUsContent