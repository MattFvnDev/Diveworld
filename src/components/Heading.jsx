import {Tag} from "./"

const Heading = ({ className, title, tag }) => {
    return (
      <div
        className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
      >
        {tag && <Tag className="mb-4 md:justify-center">{tag}</Tag>}
        {title && <h2 className="text-2xl leading-none md:text-3xl lg:text-4xl xl:text-5xl">{title}</h2>}
      </div>
    )
  }
  
  export default Heading