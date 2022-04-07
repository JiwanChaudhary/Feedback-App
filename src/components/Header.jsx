import React from "react";
import PropTypes from "prop-types";

const Header = ({ text, textColor, bgColor }) => {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    };

  return (
   <header style={headerStyles}>
     <div className="container">
       <h2>{text}</h2>
     </div>

   </header>
  );
};

// console.log(<Header />);

Header.defaultProps = {
  text: "Feedback App",
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
