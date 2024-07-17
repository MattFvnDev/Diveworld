import { Link } from "react-router-dom"
const Button = ({ className, to, onClick, children, type }) => {
  const renderButton = () => (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  )

  const renderLink = () => (
    <Link to={to} onClick={onClick} className={className}>
      {children}
    </Link>
  )

  return to ? renderLink() : renderButton()
}

export default Button
