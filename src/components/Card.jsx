import { Link } from "react-router-dom";
const Card = ({ className, to, children}) => {
    const renderCard = () => (
        <div className={className}>
          {children}
        </div>
      );
    
      const renderCardLink = () => (
        <Link to={to} className={className}>
          {children}
        </Link>
      );
    
      return to ? renderCardLink() : renderCard();
}

export default Card
