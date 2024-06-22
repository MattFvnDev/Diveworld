const Button = ({ className, href, onClick, children}) => {
    const renderButton = () => (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  
    const renderLink = () => (
      <a href={href} className={className}>
        {children}
      </a>
    );
  
    return href ? renderLink() : renderButton();
  };

export default Button;