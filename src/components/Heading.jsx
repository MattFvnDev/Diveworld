import { Tag } from "./"

const Heading = ({ title, tag, text }) => {
  return (
    <div
      className="max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center"
    >
      {tag && (
        <Tag className="mb-4 md:justify-center text-default/70">{tag}</Tag>
      )}
      {title && (
        <h2 className="text-2xl leading-none md:text-3xl lg:text-4xl xl:text-5xl">
          {title}
        </h2>
      )}
      {text && <p className="text-base mt-4 text-default/70">{text}</p>}
    </div>
  )
}

export default Heading
