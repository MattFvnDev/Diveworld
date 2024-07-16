import { Link } from "react-router-dom";
const Button = ({ className, to, onClick, children}) => {
    const renderButton = () => (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  
    const renderLink = () => (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  
    return to ? renderLink() : renderButton();
  };

export default Button;